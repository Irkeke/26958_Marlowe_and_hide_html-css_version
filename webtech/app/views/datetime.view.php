<?php
// VIEW — presentation only. Everything it prints comes from $data,
// which was prepared by DateModel and handed over by DateController.
// This file is included by /datetime.php, so all links below are written
// relative to that URL, not to this file's location on disk.
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Server Clock — Marlowe &amp; Hide Portal</title>
<link rel="stylesheet" href="public/css/style.css">
</head>
<body>

<header class="site">
  <div class="container nav-wrap">
    <a href="index.html" class="brand">
      <svg class="brand-mark" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="20" cy="7" r="3" fill="none" stroke="#4E2F1B" stroke-width="2"/>
        <line x1="20" y1="10" x2="20" y2="13" stroke="#4E2F1B" stroke-width="1.6"/>
        <rect x="8" y="13" width="24" height="23" rx="3" fill="#6E4429"/>
        <rect x="11" y="16" width="18" height="17" rx="1.5" fill="none" stroke="#4E2F1B" stroke-width="1" stroke-dasharray="2 2.2" opacity="0.55"/>
        <text x="20" y="29" text-anchor="middle" font-family="Fraunces, Georgia, serif" font-weight="700" font-size="13.5" letter-spacing="-0.5" fill="#F1E8D8">MH</text>
      </svg>
      <span class="brand-text">Marlowe &amp; <span>Hide</span></span>
    </a>
    <nav class="primary" aria-label="Primary">
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="app/views/inventory.html">Inventory</a></li>
        <li><a href="app/views/orders.html">Orders</a></li>
        <li><a href="app/views/production.html">Production</a></li>
        <li><a href="contact.html">Contact</a></li>
        <li><a href="app/views/dashboard.html" class="cta">Open Portal</a></li>
      </ul>
    </nav>
  </div>
</header>

<main>
  <section class="page-head">
    <div class="container">
      <div class="hero-eyebrow">Coursework requirement</div>
      <h1>Server date &amp; time</h1>
      <p class="lede">This page is generated with PHP, satisfying the assignment requirement to add a page that displays the current server date and time when run through Apache.</p>
    </div>
  </section>

  <section>
    <div class="container">

      <div class="badge-note">Requires Apache + PHP to render server-side. Opened as a plain file, your browser will show the raw PHP code below instead of the date.</div>

      <div class="panel-card" style="max-width:520px;">
        <div class="panel-title"><h3>Right now, according to the server</h3></div>
        <table class="ledger">
          <tbody>
            <tr><td style="width:40%;">Date</td><td><strong><?php echo htmlspecialchars($data['date']); ?></strong></td></tr>
            <tr><td>Time</td><td><strong><?php echo htmlspecialchars($data['time']); ?></strong></td></tr>
            <tr><td>Timezone</td><td><?php echo htmlspecialchars($data['timezone']); ?></td></tr>
          </tbody>
        </table>
      </div>

      <div class="panel-card">
        <div class="panel-title"><h3>How this page is built (MVC)</h3></div>
        <p style="max-width:70ch;">This is the one page in the portal with a real backend, so it follows the same Model / View / Controller split as the rest of the codebase:</p>
        <div class="code-box">
<span class="cm">// datetime.php — front controller (site root)</span><br>
require <span class="fn">'app/controllers/DateController.php'</span>;<br>
(new DateController())-&gt;index();<br><br>
<span class="cm">// app/models/DateModel.php — reads the server clock</span><br>
<span class="kw">class</span> DateModel {<br>
&nbsp;&nbsp;function getServerDateTime() {<br>
&nbsp;&nbsp;&nbsp;&nbsp;date_default_timezone_set(<span class="fn">'Africa/Nairobi'</span>);<br>
&nbsp;&nbsp;&nbsp;&nbsp;return [<span class="fn">'date'</span> =&gt; date(<span class="fn">'l, F j, Y'</span>), ...];<br>
&nbsp;&nbsp;}<br>
}<br><br>
<span class="cm">// app/controllers/DateController.php — asks the model, loads the view</span><br>
<span class="kw">class</span> DateController {<br>
&nbsp;&nbsp;function index() {<br>
&nbsp;&nbsp;&nbsp;&nbsp;$data = (new DateModel())-&gt;getServerDateTime();<br>
&nbsp;&nbsp;&nbsp;&nbsp;require <span class="fn">'app/views/datetime.view.php'</span>;<br>
&nbsp;&nbsp;}<br>
}<br><br>
<span class="cm">// app/views/datetime.view.php — this file: prints $data, nothing else</span>
        </div>
      </div>

      <div class="panel-card">
        <div class="panel-title"><h3>Note on this build</h3></div>
        <p style="max-width:70ch; margin-bottom:0;">The rest of this portal (dashboard, inventory, orders, production) is a frontend-only demo, structured the same way but in JavaScript: an <code>app/models</code> file holds the data, an <code>app/controllers</code> file renders it into the page, and the <code>app/views</code> HTML file stays free of hard-coded data. This page is the one place with a real server behind it, included specifically to meet the assignment's PHP requirement. To see it work: place the <code>webtech</code> folder in Apache's document root, start Apache, and open <code>http://localhost/webtech/datetime.php</code>.</p>
      </div>

    </div>
  </section>
</main>

<footer class="site">
  <div class="container">
    <div class="footer-bottom">
      <span>© 2026 Marlowe &amp; Hide Leather Co. Coursework build.</span>
      <span>datetime.php</span>
    </div>
  </div>
</footer>

</body>
</html>
