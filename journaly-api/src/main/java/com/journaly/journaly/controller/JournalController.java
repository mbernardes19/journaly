package com.journaly.journaly.controller;

import com.journaly.journaly.model.JournalEntry;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
public class JournalController {

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(value = "/", method = RequestMethod.POST)
    public @ResponseBody String saveJournalEntry(@RequestBody JournalEntry journalEntry) {
        System.out.println(journalEntry.getContent());
        return "Eu sou seu pai";
    }

}
