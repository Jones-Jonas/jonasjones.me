<script>
    // You can define your navigation links as an array of objects
    let navLinks = [
      { name: 'Home', url: '/' },
      { name: 'Projects', url: '/projects'},
      { name: 'For The Based™', url: '/based'},
      { name: 'Status', url: '/status'},
      { name: 'About', url: '/about' },
      { name: 'Contact', url: '/contact' }
    ];

    let miscLinks = [
        { name: 'For The Based&trade;', url: '/based'}
    ]
  </script>
  
  <nav>
    <ul>
      {#each navLinks as link}
        <li><a href={link.url}>{link.name}</a></li>
      {/each}
    </ul>
  </nav>
  
  <style>
    nav {
      background-color: #202324;
      padding: 10px;
      text-align: center;
    }
    
    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
    }
    
    li {
      display: inline;
      margin-right: 10px;
    }
    
    a {
      text-decoration: none;
      color: #ffffff;
      padding: 5px;
    }
    
    a:hover {
      color: #ddd;
    }
  </style>
  