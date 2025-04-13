<script>
  let locations = [
    { 
      name: 'Sandy Shores', 
      image: 'https://i.imgur.com/0CnFPWc.png', 
      coords: { x: 123, y: 456, z: 789 }, 
      price: '2000', 
      permissions: {}
    },
    { 
      name: 'St Thomas', 
      image: 'https://i.imgur.com/0CnFPWc.png', 
      coords: { x: 223, y: 556, z: 889 }, 
      price: '3000', 
      permissions: {}
    },
    { 
      name: 'Paleto Bay', 
      image: 'https://i.imgur.com/0CnFPWc.png', 
      coords: { x: 323, y: 656, z: 989 }, 
      price: '2500', 
      permissions: {}
    },
    { 
      name: 'London Hospital', 
      image: 'https://i.imgur.com/0CnFPWc.png', 
      coords: { x: 423, y: 756, z: 1089 }, 
      price: '3500', 
      permissions: {}
    },
    { 
      name: 'Mission Row Police Station', 
      image: 'https://i.postimg.cc/6w7LyyGD/JVjOlF2.png', 
      coords: { x: 523, y: 856, z: 1189 }, 
      price: '4000', 
      permissions: { perms: "police.menu" },
    }
  ];

  let currentIndex = 0;
  const numVisibleLocations = 5;
  let visibleLocations = getVisibleLocations();

  function nextLocation() {
    currentIndex = (currentIndex + 1) % locations.length;
    visibleLocations = getVisibleLocations();
  }

  function previousLocation() {
    currentIndex = (currentIndex - 1 + locations.length) % locations.length;
    visibleLocations = getVisibleLocations();
  }

// Update visibleLocations based on received message
window.addEventListener('message', function(event) {
  if (event.data.type === 'updateLocations' && event.data.locations) {
    locations = event.data.locations;
    visibleLocations = getVisibleLocations();

    // Set display to flex for the container element
    document.querySelector('.spawn_ui_container').style.display = 'flex';
  }
});


  function getVisibleLocations() {
    return Array.from({ length: numVisibleLocations }, (_, i) => {
      return locations[(currentIndex + i) % locations.length];
    });
  }

  function handleSpawnClick() {
    console.log('Spawn button clicked!');
    // Add any other actions you want to perform here
  }

</script>

<main class="spawn_ui_container">
  <div class="spawn_ui_options">
    <div class="spawn_ui_images">
      {#each visibleLocations as location}
      <div class="spawn_ui_image" style="background-image: url('{location.image}'); {location === visibleLocations[2] ? '' : 'filter: brightness(0.85); opacity: 0.3;'}">
        <!-- <h1>{location.name}</h1> -->
      </div>
      {/each}
    </div>
  </div>

  <div class="spawn_location_info">
    <h1 class="">Select Spawn Location</h1>
    <h1 class="location_name">{visibleLocations[2].name}</h1> <!-- Center image -->
    <h1 class="">Respawn Fee: <span>£{visibleLocations[2].price}</span></h1>
    <div class="spawn_ui_arrows">
      <div class="spawn_ui_arrow" on:click={previousLocation}>
        <img src="./public/arrow.png" alt="Previous" />
      </div>
      <div class="spawn_ui_arrow" on:click={nextLocation}>
        <img src="./public/arrow.png" alt="Next" />
      </div>
    </div>
    <h1 class="location_spawn_button" on:click={handleSpawnClick}>Spawn</h1>
  </div>
</main>

<style>
  /* Your existing CSS styles */
  .spawn_location_info {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    position: relative;
    user-select: none;
  }
  .spawn_location_info > h1 {
    margin: 0.1rem;
    font-size: 1.2rem;
    text-shadow: 0px 0px 7px #909090;
  }
  .spawn_ui_arrow:hover {
    transform: scale(1.05);
  }
  .location_name {
    font-size: 2rem !important; /* Adjust as needed */
  }
  .location_spawn_button {
    font-size: 1.4rem !important;
    background: #00bcd45e;
    border: 0.2rem solid rgb(12 253 227);
    border-radius: 0.7rem;
    padding: 0.3rem 5.5rem;
    text-transform: uppercase;
    position: relative;
  }
  .location_spawn_button:hover {
    transform: scale(1.05);
  }

  .spawn_ui_container {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    height: 100%;
    display: flex;
    background: linear-gradient(217deg, rgba(255, 0, 221, 0.3), rgba(0, 238, 255, 0.1) 70.71%), linear-gradient(127deg, rgba(0, 255, 0, 0.486), rgba(0, 255, 0, 0) 70.71%), linear-gradient(336deg, rgba(0, 0, 255, .212), rgba(0, 0, 255, 0) 70.71%);
    justify-content: center;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
  }
  .spawn_ui_options {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    width: 90%;
  }
  .spawn_ui_images {
    display: flex;
    transition: transform 0.8s ease-in-out;
    width: 100%;
    opacity: 0.95;
  }
  .spawn_ui_arrows {
    width: 90%;
    display: flex;
    position: absolute;
    justify-content: space-between;
    align-items: center;
  }
  .spawn_ui_image {
    width: 100%;
    height: 35rem;
    position: relative;
    border-bottom: 0.6rem solid rgb(98, 221, 221);
    background-size: cover;
    clip-path: polygon(12% 0, 100% 0, 89% 100%, 0% 100%);
    justify-content: center;
    display: flex;
    align-items: flex-end;
  }
  .spawn_ui_image > h1 {
    /* background: rgba(0, 0, 0, 0.315); */
    width: 100%;
    font-size: 1.2em;
    font-style: italic;
  }
  .spawn_ui_arrow > img {
    width: 4rem;
    background: #00bcd45e;
    border: 0.15rem solid rgb(12 253 227);
    border-radius: 0.3rem;
    padding: 0.5rem;
  }
  .spawn_ui_arrows > div:nth-child(1) > img:nth-child(1) {
    transform: rotate(180deg);
  }
</style>
