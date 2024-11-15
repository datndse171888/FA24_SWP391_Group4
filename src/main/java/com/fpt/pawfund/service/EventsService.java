package com.fpt.pawfund.service;

import com.fpt.pawfund.model.Events;
import com.fpt.pawfund.repository.EventsRepository;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;

@Service
public class EventsService {
    @Autowired
    private EventsRepository eventsRepository;

    public List<Events> getAllEvents() {
        return eventsRepository.findAll();
    }

    public Events getEventsById(int id) {
        return eventsRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Events not found with ID: " + id));
    }

    public Events createEvent(Events event) {
        if (event.getStatus() == null) {
            event.setStatus(Events.Status.WAITING);
        }
        return eventsRepository.save(event);
    }
}
