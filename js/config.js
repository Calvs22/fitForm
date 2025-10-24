// Supabase configuration
const SUPABASE_URL = "https://brgabqwalqhsedehkhlr.supabase.co"; // 🔹 Replace this
const SUPABASE_KEY = "placeholder"; // 🔹 Replace this

// Initialize Supabase
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Log configuration for debugging
console.log('Supabase URL:', SUPABASE_URL);
console.log('Supabase Key:', SUPABASE_KEY ? 'Key is set' : 'Key is missing');