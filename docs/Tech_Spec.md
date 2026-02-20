# **TECHNICAL SPECIFICATION: MS Access Interactive Guide**

## **1\. Project Overview**

**Goal:** Create a responsive, educational single-page website that teaches Microsoft Access.

**Core Concept:** A "Split-Screen Simulation." The left side replicates the Microsoft Access interface (Tables, Queries, etc.), and the right side acts as an intelligent "Mentor" sidebar that updates contextually based on what the user hovers over.

**Aesthetic:** "Warm, Intellectual, & Minimalist" (Inspired by Anthropic/Claude). High-end editorial feel, not a generic tech site.

---

## **2\. Tech Stack Requirements**

* **Core:** Vanilla HTML5, CSS3, JavaScript (ES6+).  
* **Frameworks:** NONE. No React, Vue, or build steps (Webpack/Vite).  
* **Styling:**  
  * CSS Grid (Critical for the Access UI layout).  
  * CSS Variables (For theming).  
  * Flexbox (For alignment).  
* **Icons:** Lucide Icons or Heroicons (via CDN).  
* **Fonts:** Google Fonts (via CDN).

---

## **3\. Design System (The "Claude" Aesthetic)**

### **Color Palette (CSS Variables)**

* \--bg-paper: \#F9F8F6 (Main page background \- Warm Off-White).  
* \--text-primary: \#383838 (Soft Charcoal \- Headings).  
* \--text-secondary: \#555555 (Body text).  
* \--accent-color: \#D97757 (Muted Terracotta \- Links/Highlights).  
* \--ui-border: \#E5E0D8 (Subtle borders).  
* \--panel-shadow: 0 4px 20px rgba(0,0,0,0.05) (Soft, diffuse shadow).  
* **Access UI Specifics:** Use standard MS Access colors (Grays \#F0F0F0, White \#FFFFFF, Access Red \#A4373A) *only* inside the simulation container.

### **Typography**

* **Headings (H1, H2, Nav):** Merriweather or Lora (Serif). *Crucial for the intellectual vibe.*  
* **UI Text / Body:** Inter or Helvetica Neue (Sans-Serif).  
* **Code / Technical Data:** Courier New or Fira Code (Monospace).

### **Visual Style**

* **Containers:** Rounded corners (border-radius: 12px).  
* **Spacing:** Generous padding. The interface should feel "breathy" and calm.  
* **Transitions:** All hover effects must use transition: all 0.3s ease. No abrupt color changes.

---

## **4\. File Structure**

Plaintext

/project-root
  │
  ├── index.html           (Home: Intro to DBMS & Access)
  ├── tables.html          (The Table Design View Simulation)
  ├── queries.html         (The Query Design Grid Simulation)
  ├── forms.html           (Form Types Gallery)
  ├── reports.html         (Report Examples)
  │
  ├── css/
  │   ├── style.css        (Global styles: Variables, Navbar, Typography)
  │   └── simulation.css   (Specific styles for the Access UI Grids)
  │
  ├── js/
  │   ├── global.js        (Navbar logic, Mobile menu)
  │   └── interactions.js  (The "Hover" logic for the Mentor Sidebar)
  │
  ├── assets/
  │   └── icons/           (SVG icons for Save, Primary Key, Run, etc.)
  │
  └── docs/                (CONTEXT FILES FOR AI)
      ├── 1_PRD.md
      ├── 2_Tech_Spec.md
      ├── 3_Content_Inventory.md
      ├── 4_Layout_Reference.png
      └── 5_Rubric_Checklist.md

---

## **5\. Core Layout & Architecture**

### **The Split-Screen (Desktop)**

Use **CSS Grid** for the main container:

* **Left Column (70%):** The "Simulation Stage."  
  * Contains the mock-up of the MS Access software.  
  * Must use HTML Tables or CSS Grid to replicate the rows/columns of Access (Do not use screenshot images).  
  * Class name: .simulation-container  
* **Right Column (30%):** The "Info Panel."  
  * Sticky positioning (position: sticky; top: 20px).  
  * Updates dynamically.  
  * Class name: .info-panel

### **Mobile Responsiveness (Max-width: 768px)**

* Switch to **Flexbox Column**.  
* **Order:** Simulation on TOP, Info Panel on BOTTOM.  
* **Interaction:** Change "Hover" events to "Click/Tap" events.

---

## **6\. Interaction Logic (The "Brain")**

**Don't** hardcode text arrays in JavaScript. **Do** use HTML Data Attributes.

### **HTML Structure Example:**

HTML

\<tr class\="interactive-row"   
    data-title\="Data Type: Short Text"   
    data-desc\="Used for alphanumeric data (names, titles). Stores up to 255 characters."\>  
    \<td\>Kode Mobil\</td\>  
    \<td\>Short Text\</td\>  
\</tr\>

### **JavaScript Logic:**

1. Select all elements with class .interactive-row.  
2. Add Event Listener: mouseenter (or touchstart).  
3. On Trigger:  
   * Get data-title and data-desc values.  
   * Inject them into the .info-panel H2 and P tags.  
   * Add a visual highlight class (.active-row) to the triggered element.  
4. Add Event Listener: mouseleave.  
   * Revert .info-panel to default "Welcome" text.  
   * Remove highlight class.

---

## **7\. Implementation Steps for AI**

**Step 1: Scaffolding**

Create index.html with the Google Fonts links and the basic CSS Variable definitions in style.css.

**Step 2: The Simulation UI (HTML/CSS)**

Build the visual replica of the **MS Access Table Design View**.

* Top Bar: "File", "Home", "Create" tabs.  
* Toolbar: "Save", "Primary Key" icons.  
* Main Grid: Rows for Field Name, Data Type, Description.  
* Bottom Pane: Field Properties tabs.

**Step 3: The Info Panel (HTML/CSS)**

Build the sidebar with the "Paper" aesthetic.

* Warm background, serif typography.  
* Default content: "Hover over the interface to explore."

**Step 4: The Logic (JS)**

Write the script to connect the two sides using the data-attribute strategy described above.

**Step 5: Content Injection**

Populate the HTML with the specific MS Access terms (Short Text, Currency, Primary Key, Validation Rule) and their definitions.

**Step 6: Mobile Polish**

Ensure the layout stacks correctly on mobile and the "sticky" panel works at the bottom of the screen.

