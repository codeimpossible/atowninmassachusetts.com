const towns = ["Abington","Acton","Acushnet","Adams","Agawam","Alford","Amesbury","Amherst","Andover","Aquinnah","Arlington","Ashburnham","Ashby","Ashfield","Ashland","Athol","Attleboro","Auburn","Avon","Ayer","Barnstable","Barre","Becket","Bedford","Belchertown","Bellingham","Belmont","Berkley","Berlin","Bernardston","Beverly","Billerica","Blackstone","Blandford","Bolton","Boston","Bourne","Boxborough","Boxford","Boylston","Braintree","Brewster","Bridgewater","Brimfield","Brockton","Brookfield","Brookline","Buckland","Burlington","Cambridge","Canton","Carlisle","Carver","Charlemont","Charlton","Chatham","Chelmsford","Chelsea","Cheshire","Chester","Chesterfield","Chicopee","Chilmark","Clarksburg","Clinton","Cohasset","Colrain","Concord","Conway","Cummington","Dalton","Danvers","Dartmouth","Dedham","Deerfield","Dennis","Dighton","Douglas","Dover","Dracut","Dudley","Dunstable","Duxbury","East Bridgewater","East Brookfield","East Longmeadow","Eastham","Easthampton","Easton","Edgartown","Egremont","Erving","Essex","Everett","Fairhaven","Fall River","Falmouth","Fitchburg","Florida","Foxborough","Framingham","Franklin","Freetown","Gardner","Georgetown","Gill","Gloucester","Goshen","Gosnold","Grafton","Granby","Granville","Great Barrington","Greenfield","Groton","Groveland","Hadley","Halifax","Hamilton","Hampden","Hancock","Hanover","Hanson","Hardwick","Harvard","Harwich","Hatfield","Haverhill","Hawley","Heath","Hingham","Hinsdale","Holbrook","Holden","Holland","Holliston","Holyoke","Hopedale","Hopkinton","Hubbardston","Hudson","Hull","Huntington","Ipswich","Kingston","Lakeville","Lancaster","Lanesborough","Lawrence","Lee","Leicester","Lenox","Leominster","Leverett","Lexington","Leyden","Lincoln","Littleton","Longmeadow","Lowell","Ludlow","Lunenburg","Lynn","Lynnfield","Malden","Manchester-by-the-Sea","Mansfield","Marblehead","Marion","Marlborough","Marshfield","Mashpee","Mattapoisett","Maynard","Medfield","Medford","Medway","Melrose","Mendon","Merrimac","Methuen","Middleborough","Middlefield","Middleton","Milford","Millbury","Millis","Millville","Milton","Monroe","Monson","Montague","Monterey","Montgomery","Mount Washington","Nahant","Nantucket","Natick","Needham","New Ashford","New Bedford","New Braintree","New Marlborough","New Salem","Newbury","Newburyport","Newton","Norfolk","North Adams","North Andover","North Attleborough","North Brookfield","North Reading","Northampton","Northborough","Northbridge","Northfield","Norton","Norwell","Norwood","Oak Bluffs","Oakham","Orange","Orleans","Otis","Oxford","Palmer","Paxton","Peabody","Pelham","Pembroke","Pepperell","Peru","Petersham","Phillipston","Pittsfield","Plainfield","Plainville","Plymouth","Plympton","Princeton","Provincetown","Quincy","Randolph","Raynham","Reading","Rehoboth","Revere","Richmond","Rochester","Rockland","Rockport","Rowe","Rowley","Royalston","Russell","Rutland","Salem","Salisbury","Sandisfield","Sandwich","Saugus","Savoy","Scituate","Seekonk","Sharon","Sheffield","Shelburne","Sherborn","Shirley","Shrewsbury","Shutesbury","Somerset","Somerville","South Hadley","Southampton","Southborough","Southbridge","Southwick","Spencer","Springfield","Sterling","Stockbridge","Stoneham","Stoughton","Stow","Sturbridge","Sudbury","Sunderland","Sutton","Swampscott","Swansea","Taunton","Templeton","Tewksbury","Tisbury","Tolland","Topsfield","Townsend","Truro","Tyngsborough","Tyringham","Upton","Uxbridge","Wakefield","Wales","Walpole","Waltham","Ware","Wareham","Warren","Warwick","Washington","Watertown","Wayland","Webster","Wellesley","Wellfleet","Wendell","Wenham","West Boylston","West Bridgewater","West Brookfield","West Newbury","West Springfield","West Stockbridge","West Tisbury","Westborough","Westfield","Westford","Westhampton","Westminster","Weston","Westport","Westwood","Weymouth","Whately","Whitman","Wilbraham","Williamsburg","Williamstown","Wilmington","Winchendon","Winchester","Windsor","Winthrop","Woburn","Worcester","Worthington","Wrentham","Yarmouth"];

const suffixes = [
  'borough',
  'burg',
  'bury',
  'ter',
  'town',
  'minster',
  'ston',
  'field',
  'ham',
  ' Plains'
];

const words = [
  'Packy',
  'Wicked',
  'Pissah',
  'Dunk',
  'Dirty',
  'Sling',
  'Wang',
  'Junk'
];

const prefixes = [
  'North',
  'South',
  'East',
  'West',
  'Charles',
  'Vicks',
  'Fitch',
  'Leo',
  ''
];

const dieRoll = function(chance) {
  const rndInt = Math.floor(Math.random() * 100) + 1
  return rndInt <= chance;
};

const randomItem = function(arr) {
  const idx = Math.floor(Math.random() * arr.length);
  return arr[idx];
};

const getTown = function() {
  var town = "";
  if (dieRoll(75)) town += randomItem(prefixes);
  if (dieRoll(23)) town += randomItem(words);
  town += randomItem(towns);
  if (dieRoll(32)) town += randomItem(suffixes);
  return town;
};

const DOMReady = function(a, b, c) {
  b = document
  c = 'addEventListener'
  b[c] ? b[c]('DOMContentLoaded', a) : window.attachEvent('onload', a)
}

let KEY = 'AIzaSyDa1kC1AW0Xtr6f7DK7Gi4_1XPnlfYg5Ts';
DOMReady(function () {
  let place = `${randomItem(towns)} Massachusetts, USA`;
  let mode = 'place';
  let url = `https://www.google.com/maps/embed/v1/${mode}?key=${KEY}&q=${place}`;

  console.log(url);

  document.querySelector('#town').innerText = getTown();
  document.querySelector('#map').setAttribute('src', url);
});

