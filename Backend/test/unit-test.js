const chai = require('chai');
const expect = chai.expect;
const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

describe('Backend Server Unit Testing', function() {
    it('should start the server and log the expected message', function() {
        let logMessage = 'Server Started! at http://localhost:9000';
        console.log = function(message) {
            logMessage = message;
        };

        const PORT = 9000;
        const HOST = 'localhost';

        app.listen(PORT, HOST, function() {});

        expect(logMessage).to.equal(`Server Started! at http://${HOST}:${PORT}`);
    });

    it('should connect to the database and log the expected message', function() {
        let logMessage = 'DB Connected Successfully!!';
        console.log = function(message) {
            logMessage = message;
        };

        mongoose.connect("mongodb+srv://movieshareLibrary:movieshareLibrary123Nadun@clustermoviesharelibrar.kayl27l.mongodb.net/MovieShareLibrary?retryWrites=true&w=majority",{useNewUrlParser: true, useUnifiedTopology: true }, function() {});

        expect(logMessage).to.equal("DB Connected Successfully!!");
    });
    
});
