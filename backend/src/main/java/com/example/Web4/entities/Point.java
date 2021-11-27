package com.example.Web4.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Date;

@Entity
@Data
@NoArgsConstructor
@Table(name = "points")
public class Point {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private double x;

    private double y;

    private double r;

    private String time;

    private boolean result;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    public Point(double x, double y, double r, User user) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.user = user;
        check();
        LocalDateTime today = LocalDateTime.now();
        time = today.toString();
    }

    public void check() {
        result = checkCircle() || checkTriangle() || checkRectangle();
    }

    private boolean checkCircle() {
        return x <= 0 && y >= 0 && x * x + y * y <= r * r;
    }

    private boolean checkTriangle() {
        return x >= 0 && y >= 0 && y <= r - x;
    }

    private boolean checkRectangle() {
        return x >= 0 && y <= 0 && x <= r && y >= -r;
    }
}
