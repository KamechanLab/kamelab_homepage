// homeのマウスオーバーイベント
document.getElementById('Ho').addEventListener('mouseover', function() {
    // タブ1のコンテンツを表示
    document.getElementById('Home-popup').style.display = 'block';
    
  // 他のコンテンツを非表示に
    document.getElementById('About-popup').style.display = 'none';
    document.getElementById('News-popup').style.display = 'none';
    document.getElementById('Member-popup').style.display = 'none';
    document.getElementById('Research-popup').style.display = 'none';
    document.getElementById('Content-popup').style.display = 'none';
});
// homeのマウスアウトイベント
document.getElementById('Ho').addEventListener('mouseout', function() {
    // homeのコンテンツを非表示に
    document.getElementById('Home-popup').style.display = 'none';
});


// aboutのマウスオーバーイベント
document.getElementById('Ab').addEventListener('mouseover', function() {
    // aboutのコンテンツを表示
    document.getElementById('About-popup').style.display = 'block';
    
  // 他のコンテンツを非表示に
    document.getElementById('Home-popup').style.display = 'none';
    document.getElementById('News-popup').style.display = 'none';
    document.getElementById('Member-popup').style.display = 'none';
    document.getElementById('Research-popup').style.display = 'none';
    document.getElementById('Content-popup').style.display = 'none';
});
// aboutのマウスアウトイベント
document.getElementById('Ab').addEventListener('mouseout', function() {
    //aboutのコンテンツを非表示に
    document.getElementById('About-popup').style.display = 'none';
});


// newsのマウスオーバーイベント
document.getElementById('Ne').addEventListener('mouseover', function() {
    // newsのコンテンツを表示
    document.getElementById('News-popup').style.display = 'block';
    
  // 他のコンテンツを非表示に
    document.getElementById('About-popup').style.display = 'none';
    document.getElementById('Home-popup').style.display = 'none';
    document.getElementById('Member-popup').style.display = 'none';
    document.getElementById('Research-popup').style.display = 'none';
    document.getElementById('Content-popup').style.display = 'none';
});
// Newsのマウスアウトイベント
document.getElementById('Ne').addEventListener('mouseout', function() {
    // Newsのコンテンツを非表示に
    document.getElementById('News-popup').style.display = 'none';
});


// Memberのマウスオーバーイベント
document.getElementById('Me').addEventListener('mouseover', function() {
    // Memberのコンテンツを表示
    document.getElementById('Member-popup').style.display = 'block';
    
  // 他のコンテンツを非表示に
    document.getElementById('About-popup').style.display = 'none';
    document.getElementById('News-popup').style.display = 'none';
    document.getElementById('Home-popup').style.display = 'none';
    document.getElementById('Research-popup').style.display = 'none';
    document.getElementById('Content-popup').style.display = 'none';
});
// Memberのマウスアウトイベント
document.getElementById('Me').addEventListener('mouseout', function() {
    // Memberのコンテンツを非表示に
    document.getElementById('Member-popup').style.display = 'none';
});


// Researchのマウスオーバーイベント
document.getElementById('Re').addEventListener('mouseover', function() {
    // Researchのコンテンツを表示
    document.getElementById('Research-popup').style.display = 'block';
    
  // 他のコンテンツを非表示に
    document.getElementById('About-popup').style.display = 'none';
    document.getElementById('News-popup').style.display = 'none';
    document.getElementById('Home-popup').style.display = 'none';
    document.getElementById('Member-popup').style.display = 'none';
    document.getElementById('Content-popup').style.display = 'none';
});
// Researchのマウスアウトイベント
document.getElementById('Re').addEventListener('mouseout', function() {
    // Researchのコンテンツを非表示に
    document.getElementById('Research-popup').style.display = 'none';
});


// Contentのマウスオーバーイベント
document.getElementById('Co').addEventListener('mouseover', function() {
    // Contentのコンテンツを表示
    document.getElementById('Content-popup').style.display = 'block';
    
  // 他のコンテンツを非表示に
    document.getElementById('About-popup').style.display = 'none';
    document.getElementById('News-popup').style.display = 'none';
    document.getElementById('Home-popup').style.display = 'none';
    document.getElementById('Research-popup').style.display = 'none';
    document.getElementById('Member-popup').style.display = 'none';
});
// Contentのマウスアウトイベント
document.getElementById('Co').addEventListener('mouseout', function() {
    // Contentのコンテンツを非表示に
    document.getElementById('Content-popup').style.display = 'none';
});
