package com.example.Web4.controllers;

import com.example.Web4.DTO.PointDTO;
import com.example.Web4.DTO.RadiusDTO;
import com.example.Web4.entities.Point;
import com.example.Web4.entities.User;
import com.example.Web4.repositories.PointRepository;
import com.example.Web4.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/points")
public class PointController {
    private final UserService userService;

    private final PointRepository pointRepository;

    @Autowired
    public PointController(PointRepository pointRepository, UserService userService) {
        this.pointRepository = pointRepository;
        this.userService = userService;
    }

    @CrossOrigin
    @GetMapping
    ResponseEntity<?> getUserPoints() {
        User user = userService.findByUsername(SecurityContextHolder.getContext().getAuthentication().getName());
        return ResponseEntity.ok(pointRepository.findByUser(user));
    }

    @CrossOrigin
    @PostMapping("/update")
    ResponseEntity<?> updatePoints(@RequestBody RadiusDTO radiusDTO) {
        User user = userService.findByUsername(SecurityContextHolder.getContext().getAuthentication().getName());
        List<Point> points = pointRepository.findByUser(user);
        for (Point p : points) {
            p.setR(radiusDTO.getR());
            p.check();
            pointRepository.save(p);
        }
        return ResponseEntity.ok(points);
    }

    @CrossOrigin
    @PostMapping
    ResponseEntity<?> addPoint(@RequestBody PointDTO pointDTO) {
        User user = userService.findByUsername(SecurityContextHolder.getContext().getAuthentication().getName());
        return ResponseEntity.ok(pointRepository.save(new Point(
                pointDTO.getX(),
                pointDTO.getY(),
                pointDTO.getR(),
                user
        )));
    }

    @CrossOrigin
    @DeleteMapping
    ResponseEntity<?> deleteUserPoints() {
        User user = userService.findByUsername(SecurityContextHolder.getContext().getAuthentication().getName());
        return ResponseEntity.ok(pointRepository.deleteByUser(user));
    }
}
