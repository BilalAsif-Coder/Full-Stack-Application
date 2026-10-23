
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../App.css";
import "./dashboard.css";

function Dashboard() {
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState("Overview");

  const menuItems = [
    { name: "Overview", icon: "▦" },
    { name: "My Tasks", icon: "✓" },
    { name: "Calendar", icon: "▦" },
    { name: "Analytics", icon: "↗" },
    { name: "Settings", icon: "⚙" },
  ];

  const stats = [
    { title: "Total Tasks", value: "24", detail: "+4 this week", icon: "▤", color: "blue" },
    { title: "Completed", value: "16", detail: "67% completion rate", icon: "✓", color: "green" },
    { title: "In Progress", value: "06", detail: "Keep it going", icon: "◷", color: "purple" },
    { title: "Overdue", value: "02", detail: "Needs your attention", icon: "!", color: "orange" },
  ];

  const activities = [
    { title: "Website redesign", category: "Design", status: "Completed", color: "green", time: "10 min ago" },
    { title: "API integration", category: "Development", status: "In Progress", color: "blue", time: "1 hour ago" },
    { title: "Project documentation", category: "Planning", status: "Pending", color: "orange", time: "3 hours ago" },
    { title: "Database setup", category: "Development", status: "Completed", color: "green", time: "Yesterday" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="nex-dashboard">
      <aside className="nex-sidebar">
        <div className="nex-brand">
          <span className="nex-brand-icon">N</span>
          <span>NEXORA<span className="nex-brand-dot">.</span></span>
        </div>

        <div className="nex-workspace-label">WORKSPACE</div>

        <nav className="nex-nav">
          {menuItems.map((item) => (
            <button
              key={item.name}
              className={`nex-nav-item ${activePage === item.name ? "active" : ""}`}
              onClick={() => setActivePage(item.name)}
            >
              <span className="nex-nav-icon">{item.icon}</span>
              {item.name}
              {item.name === "My Tasks" && <span className="nex-nav-count">6</span>}
            </button>
          ))}
        </nav>

        <div className="nex-sidebar-bottom">
          <div className="nex-upgrade-card">
            <div className="nex-upgrade-icon">✦</div>
            <h4>Stay productive</h4>
            <p>Keep your tasks organized and achieve your goals.</p>
          </div>

          <button className="nex-nav-item nex-logout" onClick={handleLogout}>
            <span className="nex-nav-icon">↪</span>
            Logout
          </button>

          <div className="nex-user-mini">
            <div className="nex-avatar">B</div>
            <div className="nex-user-info">
              <strong>My Account</strong>
              <span>Personal workspace</span>
            </div>
            <span className="nex-user-menu">···</span>
          </div>
        </div>
      </aside>

      <main className="nex-main">
        <header className="nex-topbar">
          <div className="nex-breadcrumb">
            Workspace <span>/</span> <strong>{activePage}</strong>
          </div>
          <div className="nex-topbar-actions">
            <span className="nex-date">Your productivity hub</span>
            <button className="nex-notification" aria-label="Notifications">♧<i /></button>
            <div className="nex-avatar">B</div>
          </div>
        </header>

        <div className="nex-content">
          <section className="nex-welcome">
            <div>
              <span className="nex-eyebrow">YOUR WORKSPACE</span>
              <h1>{activePage === "Overview" ? "Good to see you again!" : activePage}</h1>
              <p>
                {activePage === "Overview"
                  ? "Here's what's happening with your projects today."
                  : `Manage your ${activePage.toLowerCase()} in one place.`}
              </p>
            </div>
            <button className="nex-primary-button" onClick={() => setActivePage("My Tasks")}>
              <span>+</span> View my tasks
            </button>
          </section>

          <section className="nex-stats-grid">
            {stats.map((stat) => (
              <article className="nex-stat-card" key={stat.title}>
                <div className="nex-stat-top">
                  <span className="nex-stat-title">{stat.title}</span>
                  <span className={`nex-stat-icon ${stat.color}`}>{stat.icon}</span>
                </div>
                <div className="nex-stat-value">{stat.value}</div>
                <div className="nex-stat-detail">{stat.detail}</div>
              </article>
            ))}
          </section>

          <section className="nex-middle-grid">
            <article className="nex-panel nex-progress-panel">
              <div className="nex-panel-heading">
                <div>
                  <h3>Weekly progress</h3>
                  <p>Your task completion overview</p>
                </div>
                <span className="nex-period-pill">This week⌄</span>
              </div>

              <div className="nex-progress-body">
                <div className="nex-progress-ring">
                  <div className="nex-ring-inner">
                    <strong>67%</strong>
                    <span>Completed</span>
                  </div>
                </div>
                <div className="nex-progress-legend">
                  <div><i className="legend-green" /><span>Completed</span><strong>16</strong></div>
                  <div><i className="legend-blue" /><span>In progress</span><strong>6</strong></div>
                  <div><i className="legend-gray" /><span>Pending</span><strong>2</strong></div>
                </div>
              </div>
            </article>

            <article className="nex-panel nex-focus-panel">
              <div className="nex-panel-heading">
                <div>
                  <h3>Focus for today</h3>
                  <p>Small steps make a difference</p>
                </div>
                <span className="nex-focus-spark">✦</span>
              </div>

              <div className="nex-focus-highlight">
                <div className="nex-focus-icon">↗</div>
                <div>
                  <strong>Keep your momentum</strong>
                  <p>You're making progress. Keep going!</p>
                </div>
              </div>

              <div className="nex-focus-bottom">
                <div>
                  <span>Daily goal</span>
                  <strong>3 of 5 tasks</strong>
                </div>
                <span className="nex-goal-percent">60%</span>
              </div>
              <div className="nex-goal-track"><span /></div>
            </article>
          </section>

          <section className="nex-panel nex-activity-panel">
            <div className="nex-panel-heading">
              <div>
                <h3>{activePage === "My Tasks" ? "My Tasks" : "Recent activity"}</h3>
                <p>Your latest workspace updates</p>
              </div>
              <button className="nex-text-button" onClick={() => setActivePage("My Tasks")}>
                View all <span>→</span>
              </button>
            </div>

            <div className="nex-table-wrap">
              <table className="nex-activity-table">
                <thead>
                  <tr>
                    <th>Task name</th>
                    <th>Category</th>
                    <th>Status</th>
                    <th>Last updated</th>
                  </tr>
                </thead>
                <tbody>
                  {activities.map((activity) => (
                    <tr key={activity.title}>
                      <td>
                        <span className={`nex-task-check ${activity.color}`}>
                          {activity.status === "Completed" ? "✓" : ""}
                        </span>
                        <strong>{activity.title}</strong>
                      </td>
                      <td><span className="nex-category">{activity.category}</span></td>
                      <td><span className={`nex-status ${activity.color}`}>{activity.status}</span></td>
                      <td className="nex-time">{activity.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <footer className="nex-footer">
            <span>© 2026 Nexora Workspace</span>
            <span>Built for better work <b>✦</b></span>
          </footer>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
