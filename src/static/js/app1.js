import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <header>
        <button onClick={handleClose}>Close</button>
        <h1>Jobs On-demand</h1>
        <nav>
          <button>Activity</button>
          <button>Map</button>
        </nav>
      </header>
      <main>
        <JobsTable />
        <footer>
          <div>Total 5 Stops</div>
          <div>Left 5 Stops</div>
          <div>Hours Forecast 12 hours</div>
          <div>Problems 0 issues</div>
          <div>Hours Done 0.5 hours</div>
        </footer>
      </main>
    </div>
  );
}

function JobsTable() {
  const jobsData = [
    {
      id: 1,
      type: 'Standard Parcel',
      job: '699291f9',
      customer: 'NICK BRADLEY',
      location: 'HHJM+37 Peterborough',
      inProgress: 'GREEN001 : Leonardo Silva',
    },
    // ... other job data
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>Items</th>
          <th>Type</th>
          <th>Job</th>
          <th>Customer</th>
          <th>Customer Location</th>
          <th>In Progress</th>
        </tr>
      </thead>
      <tbody>
        {jobsData.map((job) => (
          <JobRow key={job.id} job={job} />
        ))}
      </tbody>
    </table>
  );
}

function JobRow({ job }) {
  return (
    <tr>
      <td>{job.id}</td>
      <td>{job.type}</td>
      <td>{job.job}</td>
      <td>{job.customer}</td>
      <td>{job.location}</td>
      <td>{job.inProgress}</td>
    </tr>
  );
}

function handleClose() {
  // Handle the close button click
}

export default App;
