# Day-X Learning: Bootstrap Form Controls

Aaj maine Bootstrap me **form controls** practice kiye.  
Forms ko responsive aur stylish banane ke liye ye classes use hoti hain.  

### Topics Covered
- Text, Email, Password Inputs  
- Select / Dropdown  
- Textarea  
- Checkbox & Radio Buttons  
- File Upload  
- Range Slider  
- Submit Button  

### Key Learning
- `.form-control` → Input, textarea, select  
- `.form-label` → Label  
- `.form-check` → Checkbox / Radio  
- `.form-range` → Slider  
- Bootstrap se forms **responsive aur professional** lagte hain easily.  

### Example
```html
<input type="text" class="form-control" placeholder="Name">
<select class="form-select"><option>India</option></select>
<textarea class="form-control" rows="3"></textarea>
<input type="checkbox" class="form-check-input">
<input type="radio" class="form-check-input">
<input type="file" class="form-control">
<input type="range" class="form-range" min="0" max="10">
<button type="submit" class="btn btn-primary">Submit</button>
