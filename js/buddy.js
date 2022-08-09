const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => displayBuddies(data));
}
loadBuddies();
const displayBuddies = data => {
    // console.log(data);
    const buddies = data.results;
    for (const buddy of buddies) {
        const buddiesDiv = document.getElementById('buddies');
        // console.log(buddy);

        const p = document.createElement('p');
        // p.innerText = buddy.email;
        p.innerText = `Name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last} ${buddy.email}`;
        buddiesDiv.appendChild(p);
    }
}