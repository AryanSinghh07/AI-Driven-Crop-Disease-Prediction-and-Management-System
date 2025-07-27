import { useState } from 'react';
import './Blog.css';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Sample blog articles data
  const blogArticles = [
    {
      id: 1,
      title: "The Complete Guide to Organic Wheat Farming",
      category: "crops",
      author: "Dr. Sarah Johnson",
      date: "2024-01-15",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      excerpt: "Discover the secrets of successful organic wheat farming, from soil preparation to harvest techniques. Learn how to maximize yields while maintaining soil health and biodiversity.",
      content: `Organic wheat farming represents a sustainable approach to agriculture that prioritizes soil health, biodiversity, and environmental stewardship. This comprehensive guide covers everything from selecting the right wheat varieties for your climate to implementing natural pest control methods.

The foundation of successful organic wheat farming lies in proper soil preparation. Healthy soil rich in organic matter provides essential nutrients and supports beneficial microorganisms that help plants thrive. Crop rotation is crucial, as it prevents soil depletion and reduces pest pressure naturally.

When selecting wheat varieties, consider factors such as your local climate, soil type, and intended use. Hard red winter wheat is excellent for bread making, while soft white wheat works well for pastries and cakes. Organic seeds are preferred to maintain the integrity of your organic operation.

Pest management in organic wheat farming relies on prevention rather than chemical intervention. Beneficial insects, crop rotation, and resistant varieties form the backbone of natural pest control. Regular monitoring helps identify issues early, allowing for timely intervention using organic methods.

Harvest timing is critical for optimal grain quality and yield. Wheat should be harvested when the grain moisture content is between 13-15%. Proper storage conditions prevent spoilage and maintain grain quality for extended periods.

The benefits of organic wheat farming extend beyond environmental protection. Organic wheat often commands premium prices in the market, providing better economic returns for farmers who adopt these sustainable practices.`,
      tags: ["organic farming", "wheat", "sustainable agriculture", "soil health"]
    },
    {
      id: 2,
      title: "Growing Tomatoes: From Seed to Harvest",
      category: "vegetables",
      author: "Mike Chen",
      date: "2024-01-12",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      excerpt: "Master the art of growing delicious, juicy tomatoes in your garden. This step-by-step guide covers everything from seed selection to harvesting techniques.",
      content: `Tomatoes are one of the most rewarding vegetables to grow, offering both beauty and bounty to your garden. Whether you're a beginner or experienced gardener, understanding the complete lifecycle of tomato plants is essential for success.

Starting with quality seeds is the first step toward a bountiful harvest. Choose varieties that suit your climate and growing conditions. Determinate varieties are compact and ideal for containers, while indeterminate varieties continue growing throughout the season and require staking.

Seed starting should begin 6-8 weeks before your last frost date. Use sterile seed starting mix and maintain consistent moisture and warmth. Once seedlings develop true leaves, they're ready for transplanting into larger containers.

When transplanting to the garden, choose a sunny location with well-draining soil rich in organic matter. Tomatoes thrive in slightly acidic soil with a pH between 6.0 and 6.8. Proper spacing allows for good air circulation and reduces disease pressure.

Supporting your tomato plants is crucial for healthy growth and easy harvesting. Stakes, cages, or trellises prevent plants from sprawling and keep fruit off the ground. Regular pruning of suckers (the shoots that grow between the main stem and branches) helps direct energy toward fruit production.

Watering consistently is key to preventing blossom end rot and ensuring even fruit development. Mulching helps retain soil moisture and suppresses weeds. Regular feeding with organic fertilizers provides the nutrients needed for vigorous growth and abundant fruiting.

Pest and disease management includes regular monitoring for common issues like tomato hornworms, aphids, and fungal diseases. Early detection and organic treatment methods help maintain plant health without compromising the organic integrity of your garden.

Harvesting tomatoes at peak ripeness ensures the best flavor and nutritional value. Most varieties are ready when they develop full color and give slightly to gentle pressure. Regular harvesting encourages continued fruit production throughout the season.`,
      tags: ["tomatoes", "vegetable gardening", "organic growing", "harvesting"]
    },
    {
      id: 3,
      title: "Apple Orchard Management: Best Practices",
      category: "fruits",
      author: "Emma Rodriguez",
      date: "2024-01-10",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      excerpt: "Learn the essential practices for maintaining a healthy and productive apple orchard. From pruning techniques to pest management, discover how to maximize your apple harvest.",
      content: `Apple orchard management requires a comprehensive approach that balances tree health, fruit quality, and sustainable practices. Successful orchardists understand that proper management begins long before the first fruit appears and continues throughout the year.

Site selection and preparation are fundamental to orchard success. Apple trees require well-draining soil with good fertility and a pH between 6.0 and 7.0. Adequate sunlight exposure and protection from strong winds are essential for optimal growth and fruit development.

Choosing the right apple varieties for your climate and market is crucial. Consider factors such as chill hours, disease resistance, and harvest timing. Popular varieties like Honeycrisp, Gala, and Fuji offer different characteristics and market opportunities.

Pruning is perhaps the most important cultural practice in apple orchard management. Winter pruning removes dead, diseased, and crossing branches while shaping the tree for optimal light penetration and air circulation. Summer pruning helps control vegetative growth and directs energy toward fruit production.

Training systems like central leader, open center, or espalier determine tree structure and influence management practices. The choice of training system depends on variety characteristics, spacing, and management preferences.

Pest and disease management in modern orchards emphasizes integrated pest management (IPM) approaches. Regular monitoring helps identify issues early, allowing for targeted interventions that minimize environmental impact. Beneficial insects, pheromone traps, and selective pesticides form the foundation of effective pest control.

Fertilization programs should be based on soil testing and tree needs. Organic amendments like compost and manure provide slow-release nutrients while improving soil structure. Regular soil testing helps maintain optimal fertility levels without over-application.

Irrigation management ensures consistent moisture availability throughout the growing season. Drip irrigation systems provide efficient water delivery while reducing disease pressure from overhead watering. Monitoring soil moisture helps optimize irrigation timing and duration.

Harvest management involves careful timing to ensure optimal fruit quality and storage potential. Different varieties have specific harvest windows, and proper handling during harvest prevents bruising and maintains fruit quality.`,
      tags: ["apple orchard", "fruit trees", "pruning", "pest management"]
    },
    {
      id: 4,
      title: "Sustainable Rice Farming Techniques",
      category: "crops",
      author: "Dr. Rajesh Kumar",
      date: "2024-01-08",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      excerpt: "Explore innovative sustainable rice farming methods that reduce water usage, improve soil health, and increase yields while protecting the environment.",
      content: `Sustainable rice farming represents a paradigm shift from traditional methods toward practices that balance productivity with environmental stewardship. As rice is a staple food for over half the world's population, sustainable production methods are crucial for food security and environmental protection.

Water management is central to sustainable rice farming. Traditional flooding methods consume enormous amounts of water and contribute to methane emissions. Alternative approaches like alternate wetting and drying (AWD) reduce water usage by 30-50% while maintaining yields. This method involves allowing fields to dry partially between irrigation events, which also reduces methane emissions.

System of Rice Intensification (SRI) is another innovative approach that challenges conventional rice farming practices. SRI emphasizes early transplanting of young seedlings, wider spacing, and reduced water usage. These practices promote stronger root development and increased tillering, often resulting in higher yields with fewer inputs.

Soil health management in sustainable rice farming focuses on organic matter addition and reduced tillage. Cover crops, green manures, and crop residues improve soil structure and fertility while reducing erosion. Organic amendments provide slow-release nutrients and support beneficial soil microorganisms.

Integrated pest management (IPM) reduces reliance on chemical pesticides while maintaining effective pest control. Biological control agents, crop rotation, and resistant varieties form the foundation of IPM programs. Regular monitoring helps identify pest populations early, allowing for targeted interventions.

Nutrient management emphasizes efficient use of fertilizers to minimize environmental impact. Site-specific nutrient management considers soil conditions, crop needs, and environmental factors to optimize fertilizer application. Organic sources like compost and green manures provide sustainable nutrient inputs.

Climate-smart rice farming addresses the challenges of climate change through adaptive practices. Drought-resistant varieties, improved water management, and carbon sequestration practices help rice farmers adapt to changing conditions while contributing to climate mitigation.

The economic benefits of sustainable rice farming extend beyond environmental protection. Reduced input costs, premium prices for sustainably produced rice, and improved resilience to climate variability provide economic advantages for farmers adopting these practices.`,
      tags: ["rice farming", "sustainable agriculture", "water management", "climate smart"]
    },
    {
      id: 5,
      title: "Growing Bell Peppers: A Complete Guide",
      category: "vegetables",
      author: "Lisa Thompson",
      date: "2024-01-05",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      excerpt: "Discover how to grow vibrant, flavorful bell peppers in your garden. Learn about soil preparation, planting techniques, and care throughout the growing season.",
      content: `Bell peppers are a versatile and colorful addition to any vegetable garden, offering both beauty and nutrition. These warm-season vegetables require careful attention to temperature, soil conditions, and cultural practices for optimal growth and fruit production.

Temperature management is critical for bell pepper success. These heat-loving plants require warm soil (at least 60°F) for transplanting and thrive in temperatures between 70-85°F. Starting seeds indoors 8-10 weeks before the last frost ensures plants are ready for transplanting when conditions are optimal.

Soil preparation involves creating a rich, well-draining growing medium. Bell peppers prefer slightly acidic soil (pH 6.0-6.8) with high organic matter content. Incorporating compost or well-rotted manure improves soil structure and provides essential nutrients for healthy growth.

Planting techniques influence plant development and fruit production. Space plants 18-24 inches apart to allow for adequate air circulation and prevent disease. Planting slightly deeper than the root ball encourages additional root development along the stem.

Supporting bell pepper plants prevents branches from breaking under the weight of developing fruit. Stakes or cages provide necessary support while maintaining good air circulation around plants. Regular pruning of lower leaves and suckers helps direct energy toward fruit production.

Watering practices significantly impact fruit quality and plant health. Consistent moisture prevents blossom end rot and ensures even fruit development. Drip irrigation or soaker hoses deliver water directly to the root zone while keeping foliage dry, reducing disease pressure.

Fertilization programs should provide balanced nutrition throughout the growing season. Initial soil preparation with organic amendments provides a foundation, while regular feeding with balanced fertilizers supports continued growth and fruiting. Avoid over-fertilization, which can promote excessive vegetative growth at the expense of fruit production.

Pest and disease management includes monitoring for common issues like aphids, spider mites, and bacterial spot. Early detection and organic treatment methods help maintain plant health. Crop rotation and proper spacing reduce disease pressure naturally.

Harvesting bell peppers at the appropriate stage ensures optimal flavor and nutritional value. Green peppers can be harvested when they reach full size, while allowing them to ripen on the plant produces sweeter red, yellow, or orange varieties. Regular harvesting encourages continued fruit production.`,
      tags: ["bell peppers", "vegetable gardening", "warm season crops", "harvesting"]
    },
    {
      id: 6,
      title: "Citrus Grove Management: Year-Round Care",
      category: "fruits",
      author: "Carlos Mendez",
      date: "2024-01-03",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      excerpt: "Master the year-round care of citrus groves with this comprehensive guide covering pruning, fertilization, pest control, and harvest management.",
      content: `Citrus grove management requires year-round attention to detail, with different practices needed throughout the growing season. Successful citrus production depends on understanding the unique needs of these subtropical fruit trees and implementing appropriate cultural practices.

Winter management focuses on pruning and preparation for the upcoming growing season. Pruning removes dead, diseased, and crossing branches while shaping trees for optimal light penetration and air circulation. Winter is also the ideal time for major structural pruning that influences tree form and productivity.

Spring activities center on bloom management and early fruit development. Citrus trees produce abundant flowers, but not all will develop into fruit. Understanding the natural fruit drop process helps growers avoid unnecessary interventions. Proper irrigation during bloom ensures adequate moisture for flower development and fruit set.

Summer management emphasizes irrigation, fertilization, and pest control. Citrus trees have shallow root systems that require consistent moisture, especially during fruit development. Drip irrigation systems provide efficient water delivery while reducing disease pressure from overhead watering.

Fertilization programs should be based on soil testing and tree needs. Citrus trees require balanced nutrition with particular attention to nitrogen, phosphorus, and micronutrients like zinc and iron. Split applications throughout the growing season provide consistent nutrient availability.

Pest and disease management in citrus groves requires integrated approaches that consider both economic and environmental factors. Common pests include citrus leafminer, scale insects, and Asian citrus psyllid. Regular monitoring helps identify issues early, allowing for targeted interventions.

Disease management focuses on preventing fungal and bacterial diseases that can significantly impact tree health and fruit quality. Proper irrigation practices, good air circulation, and timely fungicide applications help maintain tree health.

Fall management prepares trees for winter dormancy and the next growing season. Reducing irrigation gradually helps harden off new growth and prepare trees for cooler temperatures. Fall fertilization provides nutrients for root development and early spring growth.

Harvest management involves careful timing to ensure optimal fruit quality and storage potential. Different citrus varieties have specific harvest windows, and proper handling during harvest prevents damage and maintains fruit quality. Post-harvest treatments help maintain fruit quality during storage and transportation.`,
      tags: ["citrus", "fruit trees", "grove management", "year-round care"]
    },
    {
      id: 7,
      title: "Organic Corn Farming: Sustainable Practices",
      category: "crops",
      author: "David Wilson",
      date: "2024-01-01",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      excerpt: "Learn sustainable organic corn farming methods that improve soil health, reduce environmental impact, and produce high-quality corn for various markets.",
      content: `Organic corn farming represents a sustainable approach to agriculture that prioritizes soil health, biodiversity, and environmental stewardship. This comprehensive system requires careful planning and implementation of practices that work with natural processes rather than against them.

Soil preparation and management form the foundation of successful organic corn production. Healthy soil rich in organic matter provides essential nutrients and supports beneficial microorganisms that help plants thrive. Regular soil testing guides fertility management and helps maintain optimal growing conditions.

Crop rotation is essential in organic corn farming, as it prevents soil depletion and reduces pest pressure naturally. Rotating corn with legumes, small grains, and cover crops improves soil fertility and breaks pest and disease cycles. A well-planned rotation sequence considers the specific needs and contributions of each crop.

Variety selection plays a crucial role in organic corn production. Choose varieties that are well-adapted to your climate and growing conditions, with good disease resistance and yield potential. Organic seeds are preferred to maintain the integrity of your organic operation.

Weed management in organic corn farming relies on prevention and cultural practices rather than chemical herbicides. Crop rotation, cover crops, and mechanical cultivation form the backbone of organic weed control. Timely cultivation and proper spacing help corn compete effectively with weeds.

Pest management emphasizes prevention and biological control methods. Beneficial insects, crop rotation, and resistant varieties help manage pest populations naturally. Regular monitoring helps identify issues early, allowing for timely intervention using organic methods.

Fertilization programs focus on building and maintaining soil fertility through organic amendments. Compost, manure, and cover crops provide slow-release nutrients while improving soil structure. Green manures and crop residues contribute to soil organic matter and nutrient cycling.

Harvest timing is critical for optimal grain quality and yield. Corn should be harvested when the grain moisture content is appropriate for your intended use and storage conditions. Proper handling during harvest prevents damage and maintains grain quality.

The economic benefits of organic corn farming extend beyond environmental protection. Organic corn often commands premium prices in the market, providing better economic returns for farmers who adopt these sustainable practices. Additionally, reduced input costs and improved soil health contribute to long-term profitability.`,
      tags: ["organic corn", "sustainable farming", "crop rotation", "soil health"]
    },
    {
      id: 8,
      title: "Growing Strawberries: Sweet Success Guide",
      category: "fruits",
      author: "Maria Garcia",
      date: "2023-12-28",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      excerpt: "Discover the secrets to growing sweet, juicy strawberries in your garden. From variety selection to harvesting, learn everything you need for strawberry success.",
      content: `Strawberries are one of the most rewarding fruits to grow, offering both beauty and delicious harvests. These perennial plants require specific growing conditions and cultural practices for optimal production and fruit quality.

Site selection is crucial for strawberry success. Choose a sunny location with well-draining soil and good air circulation. Strawberries prefer slightly acidic soil (pH 5.5-6.5) rich in organic matter. Avoid low-lying areas that may experience frost damage or poor drainage.

Variety selection should consider your climate, growing season, and intended use. June-bearing varieties produce a concentrated harvest in early summer, while everbearing and day-neutral varieties provide extended harvest periods. Choose varieties adapted to your specific growing conditions.

Planting techniques influence plant establishment and future productivity. Plant strawberries in early spring or late summer, ensuring the crown is at soil level. Proper spacing (12-18 inches apart) allows for adequate air circulation and reduces disease pressure.

Mulching is essential for strawberry production, helping to maintain soil moisture, suppress weeds, and keep fruit clean. Straw mulch is traditional and effective, while plastic mulch can provide additional benefits in some growing systems.

Watering practices significantly impact fruit quality and plant health. Consistent moisture prevents fruit cracking and ensures even development. Drip irrigation or soaker hoses deliver water directly to the root zone while keeping foliage dry, reducing disease pressure.

Fertilization programs should provide balanced nutrition throughout the growing season. Initial soil preparation with organic amendments provides a foundation, while regular feeding with balanced fertilizers supports continued growth and fruiting.

Pest and disease management includes monitoring for common issues like slugs, birds, and fungal diseases. Physical barriers like netting protect fruit from birds, while cultural practices like proper spacing and good air circulation reduce disease pressure.

Renovation is an important practice for maintaining strawberry bed productivity. After harvest, mowing plants and removing old leaves helps rejuvenate the planting and prepare for the next growing season. Regular renovation extends the productive life of strawberry beds.

Harvesting strawberries at peak ripeness ensures the best flavor and nutritional value. Berries are ready when they develop full color and separate easily from the plant. Regular harvesting encourages continued fruit production and prevents over-ripening.`,
      tags: ["strawberries", "fruit gardening", "perennial crops", "harvesting"]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Articles', icon: '📚' },
    { id: 'crops', name: 'Crops', icon: '🌾' },
    { id: 'vegetables', name: 'Vegetables', icon: '🥬' },
    { id: 'fruits', name: 'Fruits', icon: '🍎' }
  ];

  const filteredArticles = blogArticles.filter(article => {
    const matchesCategory = activeCategory === 'all' || article.category === activeCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="blog-page">
      {/* Demo Notice */}
      <div className="page-demo-notice">
        <div className="demo-notice-content">
          <span className="demo-notice-icon">⚠️</span>
          <span className="demo-notice-text">Demo Mode: All articles and content shown are for demonstration purposes only.</span>
        </div>
      </div>
      
      {/* Header Section */}
      <div className="blog-header">
        <div className="header-content">
          <h1 className="blog-title">
            <span className="blog-icon">📝</span>
            AgroVision Blog
          </h1>
          <p className="blog-subtitle">
            Expert insights, tips, and guides for modern agriculture and sustainable farming practices
          </p>
        </div>
        <div className="header-stats">
          <div className="stat-item">
            <span className="stat-number">{blogArticles.length}</span>
            <span className="stat-label">Articles</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">4</span>
            <span className="stat-label">Categories</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">8</span>
            <span className="stat-label">Authors</span>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="blog-filters">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <span className="search-icon">🔍</span>
        </div>
        
        <div className="category-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              <span className="category-icon">{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Featured Article */}
      {filteredArticles.length > 0 && (
        <div className="featured-article">
          <div className="featured-image">
            <img src={filteredArticles[0].image} alt={filteredArticles[0].title} />
            <div className="featured-overlay">
              <span className="featured-badge">Featured</span>
            </div>
          </div>
          <div className="featured-content">
            <div className="article-meta">
              <span className="category-tag">{filteredArticles[0].category}</span>
              <span className="read-time">{filteredArticles[0].readTime}</span>
            </div>
            <h2 className="featured-title">{filteredArticles[0].title}</h2>
            <p className="featured-excerpt">{filteredArticles[0].excerpt}</p>
            <div className="featured-author">
              <span className="author-name">By {filteredArticles[0].author}</span>
              <span className="publish-date">{formatDate(filteredArticles[0].date)}</span>
            </div>
            <button className="read-more-btn">Read Full Article</button>
          </div>
        </div>
      )}

      {/* Articles Grid */}
      <div className="articles-section">
        <h2 className="section-title">
          {activeCategory === 'all' ? 'All Articles' : `${categories.find(c => c.id === activeCategory)?.name}`}
          <span className="article-count">({filteredArticles.length} articles)</span>
        </h2>

        <div className="articles-grid">
          {filteredArticles.slice(1).map(article => (
            <article key={article.id} className="article-card">
              <div className="article-image">
                <img src={article.image} alt={article.title} />
                <div className="article-overlay">
                  <span className="category-badge">{article.category}</span>
                </div>
              </div>
              <div className="article-content">
                <div className="article-meta">
                  <span className="read-time">{article.readTime}</span>
                  <span className="publish-date">{formatDate(article.date)}</span>
                </div>
                <h3 className="article-title">{article.title}</h3>
                <p className="article-excerpt">{article.excerpt}</p>
                <div className="article-author">
                  <span className="author-name">By {article.author}</span>
                </div>
                <div className="article-tags">
                  {article.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                <button className="read-more-btn">Read More</button>
              </div>
            </article>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="no-results">
            <span className="no-results-icon">🔍</span>
            <h3>No articles found</h3>
            <p>Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>

      {/* Newsletter Section */}
      <div className="newsletter-section">
        <div className="newsletter-content">
          <h3>Stay Updated with Latest Farming Insights</h3>
          <p>Subscribe to our newsletter for expert tips, industry news, and exclusive content delivered to your inbox.</p>
          <div className="newsletter-form">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="newsletter-input"
            />
            <button className="newsletter-btn">
              <span>Subscribe</span>
            </button>
          </div>
        </div>
      </div>

      {/* Popular Topics */}
      <div className="popular-topics">
        <h3>Popular Topics</h3>
        <div className="topics-grid">
          <div className="topic-card">
            <span className="topic-icon">🌱</span>
            <h4>Organic Farming</h4>
            <p>Sustainable practices for healthy crops</p>
          </div>
          <div className="topic-card">
            <span className="topic-icon">💧</span>
            <h4>Water Management</h4>
            <p>Efficient irrigation techniques</p>
          </div>
          <div className="topic-card">
            <span className="topic-icon">🐛</span>
            <h4>Pest Control</h4>
            <p>Natural pest management methods</p>
          </div>
          <div className="topic-card">
            <span className="topic-icon">🌿</span>
            <h4>Soil Health</h4>
            <p>Building fertile, productive soil</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog; 