package ua.lviv.iot.algo.part1.lab1.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ua.lviv.iot.algo.part1.lab1.model.Lamp;
import ua.lviv.iot.algo.part1.lab1.service.LampService;

import java.util.List;

@RestController
@RequestMapping("/api/lamps")
public class LampController {

    @Autowired
    private LampService lampService;

    @GetMapping
    public List<Lamp> getAllLamps() {
        return lampService.getAllLamps();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Lamp> getLampById(@PathVariable int id) {
        Lamp lamp = lampService.getLampById(id);
        return lamp != null ? ResponseEntity.ok(lamp) : ResponseEntity.notFound().build();
    }

    @PostMapping
    public List<Lamp> createLamp(@RequestBody Lamp lamp) {
        return lampService.createLamp(lamp);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Lamp> updateLamp(@PathVariable int id, @RequestBody Lamp lamp) {
        Lamp updatedLamp = lampService.updateLamp(id, lamp);
        return updatedLamp != null ? ResponseEntity.ok(updatedLamp) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteLamp(@PathVariable int id) {
        if (lampService.deleteLamp(id)) {
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}