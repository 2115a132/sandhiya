const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");
const jobList = document.getElementById("jobList");

// Example job data
const jobs = [
  { title: "Frontend Developer", company: "TechCorp", location: "Remote" },
  { title: "Backend Engineer", company: "Innovate Solutions", location: "New York, NY" },
  { title: "DevOps Specialist", company: "Cloudify", location: "San Francisco, CA" },
  { title: "UI/UX Designer", company: "DesignWorks", location: "Seattle, WA" },
];

// Function to render jobs
function renderJobs(filter = "") {
  jobList.innerHTML = ""; // Clear the list
  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(filter.toLowerCase()) ||
      job.company.toLowerCase().includes(filter.toLowerCase())
  );

  if (filteredJobs.length === 0) {
    jobList.innerHTML = `<li>No jobs found</li>`;
    return;
  }

  filteredJobs.forEach((job) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${job.title}</strong> at ${job.company} - ${job.location}`;
    jobList.appendChild(li);
  });
}

// Event listener for search
searchBtn.addEventListener("click", () => {
  const query = searchInput.value.trim();
  renderJobs(query);
});

// Initial render
renderJobs();
