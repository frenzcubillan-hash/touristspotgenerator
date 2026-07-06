# 🌍 Tourist Spot Generator
link: https://touristspotgenerator-tau.vercel.app/

A simple travel discovery web app that helps users explore amazing tourist destinations around the world based on continent, country, and category.

I built this project to make travel exploration fun, interactive, and easy to understand for everyone — even without technical knowledge.

---

# ✨ Inspiration

I got the idea from platforms like Airbnb and travel websites where users can explore places visually.

I wanted to create something similar but simpler — where users can:

🌎 Choose a continent  
🇯🇵 Pick a country  
🏖️ Select a travel type (Nature, Beach, City, etc.)  
📍 Then instantly discover real places they can visit  

My goal was to build a beginner-friendly travel explorer that feels interactive but stays lightweight and easy to deploy.

---

# 🛠️ Tools & Languages Used

I used the following tools to build this project:

💻 **Languages**
- JavaScript (ES6)
- HTML
- CSS (Tailwind-inspired styling)

⚙️ **Framework**
- Next.js (App Router)

⚛️ **Library**
- React

🎨 **Styling**
- Tailwind CSS

---

# 🌐 APIs Used

## 🗺️ OpenTripMap API
I used OpenTripMap to fetch real-world tourist locations.

It provides:
- 📍 Place names
- 🌍 Geographic coordinates
- 🧭 Nearby attractions

Example endpoint:


---

## 📸 Wikipedia REST API
I used Wikipedia’s API to get real images of famous places.

This helps ensure:
- 🏔️ Real landmark photos (like Mount Fuji, Eiffel Tower, etc.)
- 🖼️ More accurate visual representation of destinations

Example endpoint:


---

# 💡 How It Works

I designed the system in a simple flow:

🌍 Continent  
⬇️  
🇨🇳 Country  
⬇️  
🏖️ Category (Nature, Beach, City, etc.)  
⬇️  
📡 API request (only when all selections are complete)  
⬇️  
📍 Real tourist spots + images  
⬇️  
🎨 Display in a clean Airbnb-style UI  

---

# 🚀 Features

✨ Simple and clean UI  
🌎 Multi-step destination filtering  
📸 Real place images (Wikipedia API)  
📍 Live tourist spot data (OpenTripMap)  
🎯 Category-based recommendations  
📱 Fully responsive design  
⚡ Fast Next.js API routing  

---

# 📌 Implications / What I Learned

While building this project, I learned a lot about:

🧠 API integration and data filtering  
⚙️ How backend API routes work in Next.js  
🎨 Creating clean UI layouts using Tailwind CSS  
📡 Handling real-world data inconsistencies  
🚫 Dealing with missing images and fallback strategies  

I also realized that:

- Not all APIs are perfectly reliable for production use  
- Combining multiple APIs is often necessary  
- Clean UI is just as important as backend logic  
- Simple projects can still feel powerful when designed well  

---

# 🌱 Future Improvements

If I continue this project, I want to add:

🗺️ Google Maps integration  
❤️ Save favorite destinations (local storage)  
🔎 Better search and filtering system  
📸 More accurate image mapping per landmark  
🌐 Deployment polish for portfolio use  

---

# 📍 Final Note

This project is part of my learning journey in web development.

I built it to improve my understanding of APIs, frontend design, and real-world application structure — and to create something fun that people can actually use.