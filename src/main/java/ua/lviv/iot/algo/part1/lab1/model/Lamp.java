package ua.lviv.iot.algo.part1.lab1.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Lamp {
    private Integer id;
    private String type;
    private double power;
    private int leds;
    private String manufacturer;

}
