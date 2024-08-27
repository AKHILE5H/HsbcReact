package com.hsbc.movierestdemo;

import com.hsbc.movierestdemo.controller.MovieController;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class DemoApplicationTests {
    @Autowired
    private MovieController movieController;


    @Test
    void contextLoads() {
        Assertions.assertNotNull(movieController);
    }

}
