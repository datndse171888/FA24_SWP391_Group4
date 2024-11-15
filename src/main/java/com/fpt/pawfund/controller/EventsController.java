package com.fpt.pawfund.controller;

import com.fpt.pawfund.model.Events;
import com.fpt.pawfund.service.EventsService;
import com.fpt.pawfund.model.ResponseData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/events")
public class EventsController {

    @Autowired
    private EventsService eventsService;

    @PostMapping("/create")
    public ResponseEntity<?> createEvents(@RequestBody Events events) {
        try {
            Events createdEvents = eventsService.createEvent(events);
            return ResponseEntity.ok(
                    new ResponseData(100, "Post events information successfully !!", createdEvents)
            );
        } catch (Exception e) {
            return ResponseEntity.ok(
                    new ResponseData(500, "Error : " + e.getMessage(), "")
            );
        }
    }


    @GetMapping("/specified/{eventsID}")
    public ResponseEntity<ResponseData> getEventsById(@PathVariable("eventsID") int eventsID) {
        Events events = eventsService.getEventsById(eventsID);
        return ResponseEntity.ok(
                new ResponseData(100, "Get a events by id: " +events.getEventID(), events)
        );
    }

    @GetMapping("/all")
    public ResponseEntity<List<Events>> getAllEvents() {
        List<Events>events = eventsService.getAllEvents();
        return ResponseEntity.ok(events);
    }

}
