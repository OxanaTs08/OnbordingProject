// import {eventsStore} from "./js/data.js";
export const eventsStore = [
    {
      title: "INFJ Personality Type - Coffee Shop Meet & Greet",
      description: "Being an INFJ",
      date: new Date(2024, 2, 23, 15),
      image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1037&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D%201037w ",
      type: "offline",
      attendees: 99,
      category: "Hobbies and Passions",
      distance: 50,
    },
    {
      title:
        "NYC AI Users - AI Tech Talks, Demo & Social: RAG Search and Customer Experience",
      description: "New York AI Users",
      date: new Date(2024, 2, 23, 11, 30),
      image: "https://images.unsplash.com/photo-1696258686454-60082b2c33e2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
      type: "offline",
      attendees: 43,
      category: "Technology",
      distance: 25,
    },
    {
      title: "Book 40+ Appointments Per Month Using AI and Automation",
      description: "New Jersey Business Network",
      date:  new Date(2024, 2, 16, 14),
      image: "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "online",
      category: "Technology",
      distance: 10,
    },
    {
      title: "Dump writing group weekly meetup",
      description: "Dump writing group",
      date: new Date(2024, 2, 13, 11),
      image: "https://plus.unsplash.com/premium_photo-1678453146992-b80d66df9152?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "online",
      attendees: 77,
      category: "Business",
      distance: 100,
    },
    {
      title: "Over 40s, 50s, & 60s Senior Singles Chat, Meet & Dating Community",
      description: "Over 40s, 50s, 60s Singles Chat, Meet & Dating Community",
      date: new Date(2024, 2, 14, 11),
      image: "https://plus.unsplash.com/premium_photo-1706005542509-a460d6efecb0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "online",
      attendees: 140,
      category: "Social Activities",
      distance: 74,
    },
    {
      title: "All Nations - Manhattan Missions Church Bible Study",
      description: "Manhattan Bible Study Meetup Group",
      date: new Date(2024, 2, 14, 11),
      image: "https://plus.unsplash.com/premium_photo-1679488248784-65a638a3d3fc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "offline",
      category: "Health and Wellbeing",
      distance: 15,
    },
  ];
const createEl = ({ tag = 'div', text, className, ...attrs}) => {
    const element = document.createElement(tag)
    if (className) element.className = className
    if (text) element.textContent = text
    Object.keys(attrs).forEach((key) => {
       element.setAttribute(key, attrs[key])
    })
    return element
  }

    const renderEvent = (event) => {
    const container = createEl({ className: 'event-second-page' })
    const photoBox = createEl({ className: 'event-top' })
    const image = createEl({ tag: 'img', src: event.image})
    const textBox = createEl({ className: 'event-bottom' })
    const date = createEl({ tag: 'h3', text: event.date })
    const title = createEl({ tag: 'h2', text: event.title })
    const thirdLine = createEl({ className: 'third-line' })
    const category = createEl({ tag: 'p', text: event.category })
    const distance = createEl({ tag: 'p', text: event.distance + '(km)' })
    const attendees = createEl({ tag: 'p', className:'attendees', text: event.attendees + ' attendees' })
    container.append(photoBox, textBox)
    photoBox.append(image)
    thirdLine.append(category, distance)
    textBox.append(date, title, thirdLine, attendees)
    return container
}

eventsStore.forEach((event) => {
    const createEvent = renderEvent(event)
    document.querySelector('#list-of-events').append(createEvent)
})

// const createEvent = renderEvent(eventsStore[0])
// document.querySelector('#list-of-events').append(createEvent)

function filterEvents(events, filterOptions) {
    return events.filter(event => {
        
        if (filterOptions.date && event.date.getTime() !== filterOptions.date.getTime()) {
            return false;
        }
        
        if (filterOptions.type && event.type !== filterOptions.type) {
            return false;
        }
        
        if (filterOptions.distance && event.distance > filterOptions.distance) {
            return false;
        }
        
        if (filterOptions.category && event.category !== filterOptions.category) {
            return false;
        }
        return true;
    });
}

function displayEvents(events) {
    const eventsList = document.querySelector("#list-of-events");
    eventsList.textContent = ""; 
    events.forEach((event) => {
        const createEvent = renderEvent(event)
        document.querySelector('#list-of-events').append(createEvent)
    })
}


document.getElementById('filter-type').addEventListener("change", function() {
    const selectedType = this.value; 
    const filterOptions = {}; 

    if (selectedType) {
        filterOptions.type = selectedType; 
    }
    
    const filteredEvents = filterEvents(eventsStore, filterOptions);
    displayEvents(filteredEvents);
});
displayEvents(eventsStore);

document.getElementById('filter-distance').addEventListener("change", function() {
    const selectedDistance = this.value; 
    const filterOptions = {}; 

    if (selectedDistance) {
        filterOptions.distance = selectedDistance; 
    }
    
    const filteredEvents = filterEvents(eventsStore, filterOptions);
    displayEvents(filteredEvents);
});
displayEvents(eventsStore);

document.getElementById('filter-category').addEventListener("change", function() {
   
    const selectedCategory = this.value; 
    const filterOptions = {}; 

    if (selectedCategory) {
        filterOptions.category = selectedCategory; 
    }
    
    const filteredEvents = filterEvents(eventsStore, filterOptions);
    displayEvents(filteredEvents);
});


displayEvents(eventsStore);


// const event = document.querySelectorAll('.event');

// function showAllItems() {
//   const items = event;
//   items.forEach(function(item) {
//     item.classList.remove('hidden');
//   });
  
// }

