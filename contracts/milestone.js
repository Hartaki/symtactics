/* represents an uneven growth milestone */

var Milestone = {};


Milestone.currentResources = []; // current cards on this mileston
Milestone.completed = false; // true if it has 3 cards on it

Milestone.addResources = function(resources) {

    // cant add if already completed
    if (this.completed) {
        // throw error or get the next milestone to add to?
        return false;
    }
    
    // otherwise add it 
    this.currentResources.push(resource);
    
    // check if completed or not
    if (this.currentResources.length > 2) this.completed = true;
    
}

