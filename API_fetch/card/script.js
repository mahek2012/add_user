// Fetch Apis Using Fetch method

// fetch API is used to make network requests and handle responses in JavaScript. It provides a modern and flexible way to interact with APIs and retrieve data from servers. The Fetch API is built on top of Promises, which allows for easier handling of asynchronous operations.

// HTTP Basics: HTTP (Hypertext Transfer Protocol) is the foundation of data communication on the web. It defines how messages are formatted and transmitted between clients (like browsers) and servers. HTTP uses methods like GET, POST, PUT, DELETE, etc., to perform different actions on resources. Understanding HTTP basics is crucial for working with APIs and making network requests effectively.

//fetch --> then --> then --> catch
function  UserData(){
    fetch("https://randomuser.me/api/?results=100")
    .then((rawdata) => {
        console.log(rawdata);//rawdata
        return rawdata.json();// convert raw data into jsonm format
    })
    .then((data) => {
        console.log(data);//final data
        console.log(data.results);//final data

        data.results.forEach((user) => {
            // console.log(user);
            RenderUi(user);
        });
    });
}

function RenderUi(user){
    let div = document.querySelector(".main");
    div.innerHTML += `    <div class="group perspective w-full h-[400px]">
            <div class="relative w-full h-full preserve-3d shadow-xl rounded-2xl">
                
                <div class="absolute inset-0 backface-hidden bg-white rounded-2xl border border-gray-100 p-6 flex flex-col items-center justify-center">
                    <div class="relative mb-4">
                        <img src= ${user.picture.large} 
                             class="w-28 h-28 rounded-full border-4 border-indigo-50 shadow-inner">
                        <div class="absolute bottom-1 right-2 w-6 h-6 bg-green-500 border-4 border-white rounded-full"></div>
                    </div>
                    
                    <h2 class="text-xl font-bold text-gray-800 text-center">${user.name.title} ${user.name.first} ${user.name.last}</h2>
                    <p class="text-indigo-600 font-medium text-sm"> ${user.location.city}, ${user.location.country}</p>
                    
                    <div class="mt-6 w-full space-y-2 border-t pt-4 text-sm text-gray-600">
                        <p><strong>Email:</strong> ${user.email}</p>
                        <p><strong>Phone:</strong> ${user.phone}</p>
                    </div>

                    <div class="mt-auto text-[10px] text-gray-300 uppercase tracking-widest font-black">
                        Hover to Flip
                    </div>
                </div>

                <div class="absolute inset-0 backface-hidden rotate-y-180 bg-indigo-700 rounded-2xl p-6 text-white flex flex-col">
                    <h3 class="text-lg font-bold border-b border-indigo-400/50 pb-2 mb-4">Advanced Details</h3>
                    
                    <div class="space-y-4 text-xs">
                        <section>
                            <label class="block opacity-60 font-bold uppercase tracking-tighter">Username</label>
                            <p class="text-sm font-mono"> ${user.login.username}</p>
                        </section>
                        
                        <section>
                            <label class="block opacity-60 font-bold uppercase tracking-tighter">Coordinates</label>
                            <p class="text-sm italic">Lat:${user.location.latitude}  / Lon: ${user.location.longitude}</p>
                        </section>

                        <section>
                            <label class="block opacity-60 font-bold uppercase tracking-tighter">Registration</label>
                            <p class="text-sm">Active for ${user.registered.age}</p>
                        </section>

                        <section>
                            <label class="block opacity-60 font-bold uppercase tracking-tighter">Timezone</label>
                            <p class="text-sm text-indigo-100">${user.location.timezone.offset} (${user.location.timezone.timezone})</p>
                        </section>
                    </div>

                    <div class="mt-auto flex justify-between items-center bg-indigo-800/50 p-3 rounded-lg">
                        <span class="text-[10px] opacity-70">UUID: b78eeb1d...</span>
                        <button class="bg-white text-indigo-700 px-3 py-1 rounded text-[10px] font-bold">COPY ID</button>
                    </div>
                </div>

            </div>
        </div>`;
}

UserData();