package ua.lviv.iot.algo.part1.lab1.service;

import org.springframework.stereotype.Service;
import ua.lviv.iot.algo.part1.lab1.model.Lamp;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.atomic.AtomicInteger;

@Service
public class LampService {
    private final Map<Integer, Lamp> lamps = new HashMap<>();
    private final AtomicInteger idCounter = new AtomicInteger(0);

    public List<Lamp> getAllLamps() {
        return new ArrayList<>(lamps.values());
    }

    public Lamp getLampById(Integer id) {
        return lamps.get(id);
    }

    public List<Lamp> createLamp(Lamp lamp) {
        Integer id = idCounter.incrementAndGet();
        lamp.setId(id);
        lamps.put(id, lamp);
        return this.getAllLamps();
    }

    public Lamp updateLamp(Integer id, Lamp lamp) {
        if (lamps.containsKey(id)) {
            lamp.setId(id);
            lamps.put(id, lamp);
            return lamp;
        }
        return null;
    }

    public boolean deleteLamp(Integer id) {
        if (lamps.containsKey(id)) {
            lamps.remove(id);
            return true;
        }
        return false;
    }
}
