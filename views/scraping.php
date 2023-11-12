<?php
# scraping books to scrape: https://books.toscrape.com/
require 'vendor/autoload.php';
$httpClient = new \GuzzleHttp\Client();
$response;
try {
    $response = $httpClient->get('https://www.presetfree.com/category/love/cinematic-lightroom-preset-download/');
} catch (Exception $e) {
    echo 'Caught exception: ',  $e->getMessage(), "\n";
}

$htmlString = (string) $response->getBody();
//add this line to suppress any warnings
libxml_use_internal_errors(true);
$doc = new DOMDocument();
$doc->loadHTML($htmlString);
$xpath = new DOMXPath($doc);
$images = $xpath->evaluate('//div[@class="portfolio-card-header"]//img/@src');
$titles = $xpath->evaluate('//div[@class="portfolio-card-footer"]//h6/a');

foreach ($titles as $key => $title) {
echo '<div class="card" style="width:400px">
  <img class="card-img-top" src="'.$images[$key]->textContent.'" alt="Card image">
  <div class="card-body">
    <h4 class="card-title">'.$title->textContent .'</h4>
    <a href="#" class="btn btn-primary">Download</a>
  </div>
</div>';

}

