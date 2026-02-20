# Microsoft Access Education Website

---

# Problem 

**Learning Microsoft Access is intimidating because the interface is complex, and existing learning materials are dry and disconnected from the actual software experience.**

* **Static Learning Gap:** Most tutorials are long videos or static text blocks. Users have to switch back and forth between the tutorial and the software, losing context.  
* **Cognitive Overload:** Beginners are overwhelmed by the density of buttons, grids, and properties in Access without knowing what is relevant.  
* **Lack of Feedback:** Traditional websites don't provide immediate feedback on what specific UI elements actually *do*.

## Vision & Opportunity 

**We want to transform the learning experience from "memorizing a manual" to "exploring a museum."**  
By creating a high-fidelity web simulation of Microsoft Access, students can learn by exploring the interface in a safe, guided environment. This bridges the gap between theory and practice.

## Target Use Cases

1. The Student: Needs to complete a school assignment or project but is stuck on specific features (e.g., "How do I enforce referential integrity?").  
2. The Visual Learner: Struggles with text-heavy documentation and needs to see the interface to understand it.

# Proposed Solution

**Offer a "Split-Screen" interactive educational website.** The screen is divided into two halves: The left side simulates the Microsoft Access software, and the right side acts as an intelligent, dynamic mentor.

**Our Top 3 MVP Value Props:**

1. **Interactive Simulation (The Painkiller): A faithful recreation of the Access UI (Design View, Query Grid) that users can hover over to inspect.**  
2. **Contextual Learning (The Vitamin): Explanations appear instantly in the sidebar based on what the user is looking at, eliminating the need to search for definitions.**  
3. **"Warm Intellectual" Aesthetic (The Magic Moment): A clean, editorial design style (inspired by Claude/Anthropic) that reduces anxiety and makes technical content feel approachable.**

## Goals

* Clarity: Users can identify the function of a specific Access feature within 3 seconds of interacting with it.  
* Completeness: Cover all rubric requirements: DBMS concepts, Tables, Relationships, Forms, Queries, and Reports.  
* Accessibility: Fully responsive design that works on Mobile and Desktop.

Non-Goals

* Making it too overcomplicated  
* Only covers a certain scope of microsoft access and not all of it

Measurable Outcomes

* Better understanding for students learning Microsoft Access

## Conceptual Model

**User/Student:** The driver of the experience.  
**Global Navigation:** Sticky bar to jump between modules (Tables, Queries, etc.).  
**Split-Screen Layout:**

* **Left Column (The Artifact):** The interactive simulation of MS Access.  
* **Right Column (The Mentor):** The dynamic sidebar that updates text based on user actions.

**Triggers:** Hidden data points on the screen that detect mouse movement and fetch explanations.

## Requirements

Legend  
**\[P0\]** \= MVP for a GA release  
**\[P1\]** \= Important for delightful experience  
**\[P2\]** \= Nice-to-have

### CUJ 1: Navigation & Orientation (The "Claude" Feel)

*As a user, I want a clean, welcoming interface so I don't feel overwhelmed by technical jargon.*

* **\[P0\]** **Global Navigation Bar:** A sticky header containing links to: Home, Tables, Relationships, Forms, Queries, Reports.  
  * Must use Serif font (e.g., *Merriweather*).  
  * Background color: Warm Off-White (`#F9F8F6`).  
* **\[P0\]** **Split-Screen Layout:**  
  * Desktop: 70% width for Simulation (Left), 30% width for Info Panel (Right).  
  * Mobile: Stacked layout (Simulation Top, Info Panel Bottom).  
* **\[P0\]** **Info Panel State:** Default state (when not hovering) shows a general overview of the current page's topic.

### CUJ 2: Learning Table Architecture

*As a student, I need to understand how to set up a database table and what the properties mean.*

* **\[P0\]** **Table Design View Simulation:** A visual replica of the Access Table Designer grid.  
* **\[P0\]** **Interactive Data Types:**  
  * Hovering over "Short Text", "Currency", "Date/Time" in the simulation updates the Info Panel with definitions and use cases.  
* **\[P0\]** **Interactive Properties:**  
  * Hovering over the "Field Properties" pane (Field Size, Validation Rule) explains how to limit data entry.  
* **\[P0\]** **Primary Key Lesson:** A distinct, interactive "Key Icon" in the simulation toolbar. Hovering explains the concept of unique identifiers.

### CUJ 3: Understanding Relationships & Integrity

*As a student, I need to visualize how tables connect and what "Referential Integrity" means.*

* **\[P0\]** **Relationships Window Simulation:** A visual showing two tables (e.g., `Customers` and `Orders`) connected by a join line.  
* **\[P1\]** **Integrity Highlights:**  
  * Hovering over the join line highlights the "Enforce Referential Integrity" checkbox in the simulation.  
  * Info Panel explains "Cascade Update" and "Cascade Delete" with a real-world example (e.g., "Deleting a customer deletes their orders").

### CUJ 4: Creating Forms & Queries

*As a student, I need to distinguish between different types of Forms and Query tools.*

* **\[P0\]** **Form Gallery:** A section displaying screenshots/simulations of the 4 required form types:  
  * Form Design  
  * Split Form  
  * Navigation Form  
  * Multiple Items Form  
* **\[P0\]** **Query Design Grid:** A simulation of the "Query By Example" (QBE) grid.  
  * Hovering over "Criteria", "Sort", and "Show" rows explains how to filter data.  
  * **\[P1\]** **Visual Feedback:** Showing a "Run" button that, when clicked, simulates a result table appearing (e.g., showing only customers from "Jakarta").

### CUJ 5: Mobile Responsiveness

*As a user on a phone, I want to access the information without the layout breaking.*

* **\[P0\]** **Stacked View:** On screens narrower than 768px, the Simulation sits on top, and the Info Panel sits below it.  
* **\[P0\]** **Touch Interaction:** On mobile, "Hover" logic is replaced by "Tap." Tapping an element updates the info panel; tapping again deselects it.

## Design System

*To ensure the "Warm, Intellectual" aesthetic.*

* **Color Palette:**  
  * Background: `#F9F8F6` (Warm Paper).  
  * Text: `#383838` (Soft Charcoal).  
  * Access UI Container: Light Gray with Soft Shadow (to make it pop against the paper background).  
  * Accent: `#D97757` (Muted Terracotta) for active links/highlights.  
* **Typography:**  
  * Headings: Serif (*Lora* or *Merriweather*) \- for the "Editorial" look.  
  * UI/Code: Monospace (*Courier New*) or System Sans (*Inter*) \- for the technical "Simulation" parts.  
* **Interaction:**  
  * Transitions on the Info Panel text must be smooth (Fade-in/Fade-out), not abrupt.