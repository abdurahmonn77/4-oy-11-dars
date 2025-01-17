let elHeader = document.createElement("header");
elHeader.className = 'shadow-sm shadow-black';
let elHeaderContainer = document.createElement("div");
elHeaderContainer.className = 'w-[1200px] flex mx-auto py-[18px] px-[10px]';
let elLogoImg = document.createElement("img");
elLogoImg.src = './images/layer.svg'; 
elLogoImg.className = 'h-[40px]'; 
let elNavList = document.createElement("nav");
elNavList.className = 'flex items-center ml-auto';
let navList = ["Bosh sahifa", "Xizmatlar", "Portfolio", "Jamoa", "Blog", "Kontaktlar"];
navList.forEach(item => {
    let elLink = document.createElement("a");
    elLink.textContent = item;
    elLink.className = 'p-4 text-gray-600 hover:text-blue-500'; 
    elNavList.appendChild(elLink);
});
let elContactButton = document.createElement("button");
elContactButton.className = 'bg-blue-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-600';
elContactButton.textContent = '+998 90 921 37 11'; 
elHeaderContainer.appendChild(elLogoImg);
elHeaderContainer.appendChild(elNavList);
elHeaderContainer.appendChild(elContactButton);
elHeader.appendChild(elHeaderContainer);
document.body.appendChild(elHeader);
let elSection = document.createElement("section");
elSection.className = 'w-full py-12 bg-white'; 
let elContainer = document.createElement("div");
elContainer.className = 'w-[1200px] mx-auto px-4 flex flex-col items-start'; 
let elTitle = document.createElement("h1");
elTitle.className = 'text-4xl font-semibold text-black mb-4'; 
elTitle.textContent = 'Biznesingizni keyingi bosqichga olib chiqing';
let elParagraph = document.createElement("p");
elParagraph.className = 'text-lg text-gray-600 mb-8'; 
elParagraph.textContent = 'Nullam laoreet nec turpis et ultrices. Duis sit amet arcu. Nam facilisis lacinia ex, eget sollicitudin massa pellentesque in. Vivamus mattis eros at sem pulvinar';
let elButton = document.createElement("button");
elButton.className = 'bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600'; 
elButton.textContent = 'Xizmatlar bilan tanishing'; 
let elVideoContainer = document.createElement("div");
elVideoContainer.className = 'flex items-center justify-center w-full mt-8'; 
let elVideoShape = document.createElement("div");
let elPlayButton = document.createElement("div");
elPlayButton.innerHTML = '▶';
elVideoShape.appendChild(elPlayButton);
elVideoContainer.appendChild(elVideoShape);
elContainer.appendChild(elTitle);
elContainer.appendChild(elParagraph);
elContainer.appendChild(elButton);
elContainer.appendChild(elVideoContainer);
elSection.appendChild(elContainer);
document.body.appendChild(elSection);


