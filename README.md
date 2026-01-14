<div align="center">
  
# 😴 Dozy  
### Offline-First Flutter Full-Stack Application

#### 📱 Works Offline. 🔄 Syncs Smart. ⚡ Scales Clean.

---

📸 **Preview**

<table>
  <tr>
    <th>Home</th>
    <th>Offline Mode</th>
    <th>Sync Status</th>
    <th>Details</th>
  </tr>
  <tr>
    <td><img src="./screenshots/home.png" width="260"/></td>
    <td><img src="./screenshots/offline.png" width="260"/></td>
    <td><img src="./screenshots/sync.png" width="260"/></td>
    <td><img src="./screenshots/details.png" width="260"/></td>
  </tr>
</table>

</div>

<br>

## 🛠️ Overview

**Dozy** is a production-ready offline-first mobile application built with **Flutter**, designed to function seamlessly without an internet connection while maintaining reliable data synchronization with a remote server.

It demonstrates modern mobile system design with:

- 📱 Offline-first architecture  
- 💾 Local persistence with SQLite  
- 🔄 Intelligent background sync  
- 🧠 Predictable state management with BLoC  
- 🌐 Node.js REST backend  
- 🧩 Clean layered architecture  

This project showcases:

- Mobile-first data consistency  
- Offline/online conflict resolution strategies  
- Clean architecture separation  
- Scalable state management patterns  

---

## 🧰 Tech Stack

| Category | Technology |
|----------|------------|
| **Frontend** | Flutter, Dart |
| **State Management** | BLoC |
| **Local Storage** | SQLite (sqflite) |
| **Backend** | Node.js, Express |
| **Sync Layer** | Custom offline → online sync |
| **Architecture** | Clean Architecture |

---

## ✨ Core Features

### 💾 Offline-First Storage
- All user actions saved locally first  
- Full app functionality without internet  
- SQLite used as primary data source  

### 🔄 Smart Synchronization
- Automatic sync when network is available  
- Queued operations flushed safely  
- Timestamp/version based conflict resolution  

### 🧠 State Management
- Predictable event → state flow with BLoC  
- Separation of UI and business logic  
- Testable and scalable logic layers  

### 🌐 Backend Integration
- Node.js REST API for remote persistence  
- Sync endpoints for reconciliation  
- Stateless, scalable backend design  

---




