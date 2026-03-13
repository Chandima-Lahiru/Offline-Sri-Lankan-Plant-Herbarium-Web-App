// Initial Data for Sri Lankan Herbarium
const defaultPlants = [
    { id: 1, name: "Beli", scientificName: "Aegle marmelos", uses: "Excellent for digestion and cooling the body. The fruit is used for making refreshing drinks and treating dysentery.", category: "Medicinal" },
    { id: 2, name: "Kohomba", scientificName: "Azadirachta indica", uses: "Powerful antimicrobial properties. Used for skin conditions, dental care, and as a natural pesticide.", category: "Medicinal" },
    { id: 3, name: "Karapincha", scientificName: "Murraya koenigii", uses: "Essential culinary herb. Used for flavoring, improving digestion, and managing cholesterol levels.", category: "Culinary" },
    { id: 4, name: "Gotu Kola", scientificName: "Centella asiatica", uses: "Known for boosting brain health and memory. Used in 'Sambola' salads and for skin healing.", category: "Medicinal" },
    { id: 5, name: "Iramusu", scientificName: "Hemidesmus indicus", uses: "Blood purifier and body coolant. Often consumed as a herbal tea for skin health and detoxification.", category: "Medicinal" },
    { id: 6, name: "Rath Goraka", scientificName: "Garcinia quaesita", uses: "Used as a souring agent in Sri Lankan curries. Known for weight management properties and reducing cholesterol.", category: "Culinary" },
    { id: 7, name: "Ela Goraka", scientificName: "Garcinia zeylanica", uses: "Traditional spice for fish curries. Possesses strong antimicrobial and antioxidant properties.", category: "Culinary" },
    { id: 8, name: "Wal Del", scientificName: "Artocarpus nobilis", uses: "The seeds are boiled or roasted for consumption. Bark and leaves are used to treat asthma and skin diseases.", category: "Endemic" },
    { id: 9, name: "Sewala Kurundu", scientificName: "Cinnamomum dubium", uses: "A wild cinnamon variety used for its aromatic properties and in traditional digestive remedies.", category: "Endemic" },
    { id: 10, name: "Madol", scientificName: "Garcinia thwaitesii", uses: "Fruit rinds are used as a souring agent. Also used in traditional treatments for stomachic disorders.", category: "Endemic" },
    { id: 11, name: "Polpala", scientificName: "Aerva lanata", uses: "Effective for kidney stones and urinary tract infections. Acts as a powerful diuretic.", category: "Medicinal" },
    { id: 12, name: "Ranawara", scientificName: "Senna auriculata", uses: "Commonly used as a herbal tea for managing diabetes and reducing body heat.", category: "Medicinal" },
    { id: 13, name: "Rasakinda", scientificName: "Tinospora cordifolia", uses: "Boosts the immune system and is used to treat chronic fever and skin ailments.", category: "Medicinal" },
    { id: 14, name: "Venivel", scientificName: "Coscinium fenestratum", uses: "Antibacterial properties. Used for treating skin infections and body aches.", category: "Medicinal" },
    { id: 15, name: "Pawatta", scientificName: "Justicia adhatoda", uses: "Relieves respiratory issues such as asthma, coughs, and bronchitis.", category: "Medicinal" },
    { id: 16, name: "Nelli", scientificName: "Phyllanthus emblica", uses: "Rich source of Vitamin C. Enhances immunity and promotes hair growth and digestion.", category: "Medicinal" },
    { id: 17, name: "Aralu", scientificName: "Terminalia chebula", uses: "Used as a mild laxative and for improving digestion and wound healing.", category: "Medicinal" },
    { id: 18, name: "Bulu", scientificName: "Terminalia bellirica", uses: "Supports digestive health and is used in treatments for coughs and hair vitality.", category: "Medicinal" },
    { id: 19, name: "Kumbuk", scientificName: "Terminalia arjuna", uses: "Promotes heart health and is used to treat fractures and skin diseases.", category: "Medicinal" },
    { id: 20, name: "Inguru", scientificName: "Zingiber officinale", uses: "Commonly used for nausea, digestion, colds, and reducing inflammation.", category: "Culinary" },
    { id: 21, name: "Sudulunu", scientificName: "Allium sativum", uses: "Helps manage cholesterol and blood pressure levels. Supports heart health.", category: "Culinary" },
    { id: 22, name: "Gammiris", scientificName: "Piper nigrum", uses: "Used for treating coughs, colds, and improving digestion and metabolism.", category: "Culinary" },
    { id: 23, name: "Tippili", scientificName: "Piper longum", uses: "Effective for respiratory issues, digestive health, and managing fever.", category: "Medicinal" },
    { id: 24, name: "Enasal", scientificName: "Elettaria cardamomum", uses: "Flavoring agent for curries. Used for digestion and as a breath freshener.", category: "Culinary" },
    { id: 25, name: "Sadikka", scientificName: "Myristica fragrans", uses: "Used for digestive health, as a sleep aid, and for pain relief.", category: "Culinary" },
    { id: 26, name: "Kaha", scientificName: "Curcuma longa", uses: "Powerful anti-inflammatory and antiseptic. Used for skin health and as a spice.", category: "Culinary" },
    { id: 27, name: "Komarika", scientificName: "Aloe vera", uses: "Used for skin burns, digestive health, and hair care. Provides a cooling effect.", category: "Medicinal" },
    { id: 28, name: "Hathawariya", scientificName: "Asparagus racemosus", uses: "Supports female reproductive health and is used as a general tonic.", category: "Medicinal" },
    { id: 29, name: "Bin-kohomba", scientificName: "Munronia pinnata", uses: "Highly valued for blood purification and treating fever and skin diseases.", category: "Medicinal" },
    { id: 30, name: "Wel-penela", scientificName: "Cardiospermum halicacabum", uses: "Used for nerve health, promoting hair growth, and relieving joint pain.", category: "Medicinal" },
    { id: 31, name: "Erabadu", scientificName: "Erythrina variegata", uses: "Traditional remedy for worm infections and menstrual disorders.", category: "Medicinal" },
    { id: 32, name: "Murunga", scientificName: "Moringa oleifera", uses: "Highly nutritious. Used for managing blood pressure and joint pain.", category: "Culinary" },
    { id: 33, name: "Katuru-murunga", scientificName: "Sesbania grandiflora", uses: "Leaves are used in salads for eye health and treating mouth ulcers.", category: "Culinary" },
    { id: 34, name: "Akkapana", scientificName: "Kalanchoe pinnata", uses: "Used for dissolving kidney stones and treating wounds and inflammation.", category: "Medicinal" },
    { id: 35, name: "Babila", scientificName: "Sida rhombifolia", uses: "Used in traditional treatments for nerve disorders and rheumatism.", category: "Medicinal" },
    { id: 36, name: "Vishnukranthiya", scientificName: "Evolvulus alsinoides", uses: "Considered a brain tonic for improving memory and treating fever.", category: "Medicinal" },
    { id: 37, name: "Nil-awari", scientificName: "Indigofera tinctoria", uses: "Used as a natural hair dye and for promoting hair growth and skin health.", category: "Medicinal" },
    { id: 38, name: "Rath-handun", scientificName: "Pterocarpus santalinus", uses: "Red Sandalwood is used for skin glow, cooling, and reducing inflammation.", category: "Medicinal" },
    { id: 39, name: "Sudu-handun", scientificName: "Santalum album", uses: "Sandalwood is prized for skin health, cooling effects, and mental clarity.", category: "Medicinal" },
    { id: 40, name: "Devadara", scientificName: "Cedrus deodara", uses: "Used for pain relief and treating inflammation and skin diseases.", category: "Medicinal" },
    { id: 41, name: "Gammalu", scientificName: "Pterocarpus marsupium", uses: "Known for managing diabetes and treating skin diseases and diarrhea.", category: "Medicinal" },
    { id: 42, name: "Mee", scientificName: "Madhuca longifolia", uses: "Used for treating skin diseases, joint pain, and as a remedy for snake bites.", category: "Medicinal" },
    { id: 43, name: "Domba", scientificName: "Calophyllum inophyllum", uses: "Oil is used for skin diseases and rheumatism. Also used for hair care.", category: "Medicinal" },
    { id: 44, name: "Na", scientificName: "Mesua ferrea", uses: "The national tree of Sri Lanka. Used for bleeding disorders and skin diseases.", category: "Endemic" },
    { id: 45, name: "Sapu", scientificName: "Michelia champaca", uses: "Used for treating fever, skin diseases, and vertigo.", category: "Medicinal" },
    { id: 46, name: "Et-demata", scientificName: "Gmelina arborea", uses: "Supports digestive health and is used as a tonic for nerve health.", category: "Medicinal" },
    { id: 47, name: "Lunu-warana", scientificName: "Crateva religiosa", uses: "Effective for urinary stones and reducing inflammation.", category: "Medicinal" },
    { id: 48, name: "Diya-mitta", scientificName: "Cissampelos pareira", uses: "Used for treating fever, improving digestion, and wound healing.", category: "Medicinal" },
    { id: 49, name: "Kapuru-walliya", scientificName: "Plectranthus amboinicus", uses: "Commonly used for treating coughs, colds, and asthma in children.", category: "Medicinal" },
    { id: 50, name: "Kiribadu", scientificName: "Ipomoea mauritiana", uses: "Used as a general tonic and for promoting rejuvenation.", category: "Medicinal" },
    { id: 51, name: "Girithilla", scientificName: "Argyreia nervosa", uses: "Used in traditional medicine for skin diseases and as a nerve tonic.", category: "Medicinal" },
    { id: 52, name: "Aswagandha", scientificName: "Withania somnifera", uses: "Adaptogen used for stress, strength, immunity, and improving sleep.", category: "Medicinal" },
    { id: 53, name: "Heen-araththa", scientificName: "Alpinia calcarata", uses: "Used for respiratory issues, digestive health, and relieving joint pain.", category: "Medicinal" },
    { id: 54, name: "Maha-araththa", scientificName: "Alpinia galanga", uses: "Supports digestion and respiratory health. Also used for skin ailments.", category: "Medicinal" },
    { id: 55, name: "Kasthuri-kaha", scientificName: "Curcuma aromatica", uses: "Widely used for skin diseases and in cosmetic preparations for its antiseptic properties.", category: "Medicinal" },
    { id: 56, name: "Harankaha", scientificName: "Curcuma zedoaria", uses: "Used for improving digestion and as a blood purifier.", category: "Medicinal" },
    { id: 57, name: "Amba-kaha", scientificName: "Curcuma amada", uses: "Has a mango-like aroma. Used for digestion and skin health.", category: "Culinary" },
    { id: 58, name: "Sewendara", scientificName: "Vetiveria zizanioides", uses: "Used for cooling the body and treating anxiety and skin issues.", category: "Medicinal" },
    { id: 59, name: "Wadakaha", scientificName: "Acorus calamus", uses: "Used for speech disorders, improving memory, and digestive health.", category: "Medicinal" },
    { id: 60, name: "Rath-mal", scientificName: "Ixora coccinea", uses: "Used for skin diseases, dysentery, and maintaining eye health.", category: "Medicinal" },
    { id: 61, name: "Pichcha", scientificName: "Jasminum officinale", uses: "Used for its cooling properties and in treating stress and skin health.", category: "Medicinal" },
    { id: 62, name: "Saman-pichcha", scientificName: "Jasminum grandiflorum", uses: "Used for treating mouth ulcers and skin diseases. Provides cooling.", category: "Medicinal" },
    { id: 63, name: "Idda", scientificName: "Wrightia antidysenterica", uses: "Effective for skin diseases and managing digestion and diarrhea.", category: "Medicinal" },
    { id: 64, name: "Wal-idda", scientificName: "Holarrhena pubescens", uses: "Traditional remedy for dysentery and various skin conditions.", category: "Medicinal" },
    { id: 65, name: "Attana", scientificName: "Datura metel", uses: "Used for asthma and pain relief, but requires extreme caution due to toxicity.", category: "Medicinal" },
    { id: 66, name: "Niyangala", scientificName: "Gloriosa superba", uses: "Used for treating skin diseases, though the plant is highly toxic.", category: "Medicinal" },
    { id: 67, name: "Heen-thala", scientificName: "Ocimum tenuiflorum", uses: "Holy Basil; used for coughs, colds, boosting immunity, and reducing stress.", category: "Medicinal" },
    { id: 68, name: "Maduruthala", scientificName: "Ocimum gratissimum", uses: "Used as a natural mosquito repellent and for treating skin diseases.", category: "Medicinal" },
    { id: 69, name: "Kalu-thala", scientificName: "Ocimum sanctum", uses: "Supports respiratory health and is used for fever and immunity.", category: "Medicinal" },
    { id: 70, name: "Gas-pinnna", scientificName: "Clerodendrum infortunatum", uses: "Commonly used for treating worm infections and skin diseases.", category: "Medicinal" },
    { id: 71, name: "Wal-pinnna", scientificName: "Clerodendrum serratum", uses: "Used for respiratory issues like asthma and chronic coughs.", category: "Medicinal" },
    { id: 72, name: "Heen-bowitiya", scientificName: "Osbeckia octandra", uses: "Highly revered for liver health, jaundice, and managing diabetes.", category: "Endemic" },
    { id: 73, name: "Maha-bowitiya", scientificName: "Osbeckia aspera", uses: "Used in traditional medicine for liver health and skin conditions.", category: "Medicinal" },
    { id: 74, name: "Kothala-himbutu", scientificName: "Salacia reticulata", uses: "Well-known for managing diabetes, obesity, and joint pain.", category: "Medicinal" },
    { id: 75, name: "Wal-ekaweriya", scientificName: "Rauvolfia serpentina", uses: "Used for managing high blood pressure, insomnia, and anxiety.", category: "Medicinal" },
    { id: 76, name: "Rath-nitul", scientificName: "Plumbago indica", uses: "Promotes digestion and is used for skin diseases and inflammation.", category: "Medicinal" },
    { id: 77, name: "Ela-nitul", scientificName: "Plumbago zeylanica", uses: "Used for improving digestive health and treating skin ailments.", category: "Medicinal" },
    { id: 78, name: "Katupila", scientificName: "Flueggea leucopyrus", uses: "Used in traditional cancer support and for promoting wound healing.", category: "Medicinal" },
    { id: 79, name: "Monara-kudumbiya", scientificName: "Vernonia cinerea", uses: "Used for treating fever, urinary tract issues, and skin diseases.", category: "Medicinal" },
    { id: 80, name: "Undupiyaliya", scientificName: "Desmodium triflorum", uses: "Used for treating pimples, skin diseases, and mild diarrhea.", category: "Medicinal" },
    { id: 81, name: "Mukunuwenna", scientificName: "Alternanthera sessilis", uses: "Popular green leaf used for eye health and its cooling properties.", category: "Culinary" },
    { id: 82, name: "Thampala", scientificName: "Amaranthus viridis", uses: "Nutritious leafy green used for improving digestion and cooling.", category: "Culinary" },
    { id: 83, name: "Nivithi", scientificName: "Basella alba", uses: "Ceylon Spinach; used as a mild laxative and for its high nutritional value.", category: "Culinary" },
    { id: 84, name: "Kohila", scientificName: "Lasia spinosa", uses: "Highly recommended for piles (hemorrhoids) and digestive health.", category: "Culinary" },
    { id: 85, name: "Iriveriya", scientificName: "Plectranthus zeylanicus", uses: "Used for treating fever, vomiting, and diarrhea. Provides cooling.", category: "Medicinal" },
    { id: 86, name: "Sera", scientificName: "Cymbopogon citratus", uses: "Lemongrass; used for digestion and as a remedy for fever and colds.", category: "Culinary" },
    { id: 87, name: "Karabu-neti", scientificName: "Syzygium aromaticum", uses: "Cloves; used for toothaches, improving digestion, and as an antiseptic.", category: "Culinary" },
    { id: 88, name: "Kekiri", scientificName: "Cucumis melo", uses: "Used in curries and for its cooling properties and digestive benefits.", category: "Culinary" },
    { id: 89, name: "Aththora", scientificName: "Senna alata", uses: "Effective for fungal infections, ringworm, and as a laxative.", category: "Medicinal" },
    { id: 90, name: "Kalu-habarala", scientificName: "Alocasia macrorrhizos", uses: "Used in external applications for inflammation and joint pain.", category: "Medicinal" },
    { id: 91, name: "Sudu-habarala", scientificName: "Colocasia esculenta", uses: "The tubers are a source of nutrition. Known for cooling properties.", category: "Culinary" },
    { id: 92, name: "Maha-undupiyaliya", scientificName: "Desmodium gangeticum", uses: "Used for treating fever, respiratory issues, and as a general tonic.", category: "Medicinal" },
    { id: 93, name: "Wal-gammiris", scientificName: "Piper sylvaticum", uses: "Used for improving digestion and supporting respiratory health.", category: "Medicinal" },
    { id: 94, name: "Ekaweriya", scientificName: "Rauvolfia verticillata", uses: "Used for managing blood pressure and reducing anxiety.", category: "Medicinal" },
    { id: 95, name: "Bakmee", scientificName: "Nauclea orientalis", uses: "Used for digestive health, managing fever, and skin diseases.", category: "Medicinal" },
    { id: 96, name: "Aththika", scientificName: "Ficus racemosa", uses: "Used for managing diabetes, skin diseases, and diarrhea.", category: "Medicinal" },
    { id: 97, name: "Claw-flowered laurel", scientificName: "Acronychia pedunculata", uses: "Traditional remedy for skin diseases and wound healing.", category: "Medicinal" },
    { id: 98, name: "Malabar Gulbel", scientificName: "Tinospora malabarica", uses: "Used for boosting immunity and treating fever and skin issues.", category: "Medicinal" },
    { id: 99, name: "Titberry", scientificName: "Allophylus cobbe", uses: "Commonly used for treating fever and stomach aches.", category: "Medicinal" },
    { id: 100, name: "Ironwood Tree", scientificName: "Memecylon capitellatum", uses: "Used for its cooling properties and in treating skin diseases.", category: "Endemic" },
    { id: 101, name: "Kurundu", scientificName: "Cinnamomum zeylanicum", uses: "Ceylon Cinnamon; used for blood sugar control and improving circulation.", category: "Culinary" },
    { id: 102, name: "Kos", scientificName: "Artocarpus heterophyllus", uses: "Jackfruit; a staple food. Leaves and roots are used in diabetes remedies.", category: "Culinary" },
    { id: 103, name: "Karonda", scientificName: "Carissa carandas", uses: "The fruit is used for digestion. Also used for fever and skin ailments.", category: "Culinary" },
    { id: 104, name: "Bakini", scientificName: "Melia dubia", uses: "Used for skin diseases, worm infections, and managing fever.", category: "Medicinal" },
    { id: 105, name: "Heen-botiya", scientificName: "Jeffreycia zeylanica", uses: "Used in folk medicine for treating fractures, eczema, and asthma.", category: "Endemic" }
];

// State Management
let plants = JSON.parse(localStorage.getItem('herbarium_plants')) || defaultPlants;
let recentlyViewed = JSON.parse(localStorage.getItem('herbarium_recent')) || [];
let currentRole = 'user'; // default role
let isViewingAll = false;

// DOM Elements
const searchView = document.getElementById('searchView');
const recentSection = document.getElementById('recentSection');
const recentGrid = document.getElementById('recentGrid');
const clearRecentBtn = document.getElementById('clearRecentBtn');
const viewAllBtn = document.getElementById('viewAllBtn');
const detailView = document.getElementById('detailView');
const backBtn = document.getElementById('backBtn');
const detailImg = document.getElementById('detailImg');
const detailName = document.getElementById('detailName');
const detailScientific = document.getElementById('detailScientific');
const detailCategory = document.getElementById('detailCategory');
const detailUses = document.getElementById('detailUses');

const plantGrid = document.getElementById('plantGrid');
const searchInput = document.getElementById('searchInput');
const switchRoleBtn = document.getElementById('switchRoleBtn');
const roleLabel = document.getElementById('roleLabel');
const adminControls = document.getElementById('adminControls');
const addPlantBtn = document.getElementById('addPlantBtn');
const plantModal = document.getElementById('plantModal');
const closeModalBtn = document.querySelector('.close-btn');
const plantForm = document.getElementById('plantForm');
const modalTitle = document.getElementById('modalTitle');

// Functions
function init() {
    renderRecentlyViewed();
    renderPlants();
    setupEventListeners();
}

function renderPlants() {
    const searchTerm = searchInput.value.toLowerCase();
    
    // Clear grid first
    plantGrid.innerHTML = '';

    // If search term is empty and not viewing all, don't show anything
    if (searchTerm.length === 0 && !isViewingAll) {
        plantGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-secondary);">Start typing a plant name or scientific name to search...</p>';
        return;
    }

    const filteredPlants = isViewingAll && searchTerm.length === 0 
        ? plants 
        : plants.filter(plant => 
            plant.name.toLowerCase().includes(searchTerm) || 
            plant.scientificName.toLowerCase().includes(searchTerm)
        );

    if (filteredPlants.length === 0) {
        plantGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center;">No plants found matching your search.</p>';
        return;
    }

    filteredPlants.forEach(plant => {
        const card = createPlantCard(plant);
        plantGrid.appendChild(card);
    });
}

function createPlantCard(plant, isSmall = false) {
    const card = document.createElement('div');
    // Add admin-card class for taller cards in admin mode
    card.className = `plant-card clickable-card ${currentRole === 'admin' && !isSmall ? 'admin-card' : ''}`;
    
    card.onclick = (e) => {
        // Prevent opening detail view if clicking copyable elements or admin buttons
        if (!e.target.classList.contains('btn-sm') && !e.target.classList.contains('copyable')) {
            showDetailView(plant.id);
        }
    };

    const displayImg = plant.imageUrl || `https://source.unsplash.com/400x300/?plant,${plant.name.split(' ')[0]}`;

    let actionsHtml = '';
    if (currentRole === 'admin' && !isSmall) {
        actionsHtml = `
            <div class="card-actions">
                <button class="btn btn-secondary btn-sm" onclick="openEditModal(${plant.id})">Edit</button>
                <button class="btn btn-danger btn-sm" onclick="deletePlant(${plant.id})">Delete</button>
            </div>
        `;
    }

    card.innerHTML = `
        <div class="card-image-sm">
            <img src="${displayImg}" alt="${plant.name}" onerror="this.src='https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=400'">
        </div>
        <div class="card-body">
            <span class="plant-category">${plant.category}</span>
            <h3 class="copyable" title="Click to copy" onclick="copyText('${plant.name.replace(/'/g, "\\'")}', event)">${plant.name}</h3>
            <span class="scientific-name copyable" title="Click to copy" onclick="copyText('${plant.scientificName.replace(/'/g, "\\'")}', event)">${plant.scientificName}</span>
            <div class="plant-uses">
                <strong style="display: block; color: var(--primary-color); font-size: 0.8rem; margin-bottom: 5px;">Uses & Benefits:</strong>
                <p style="margin: 0; font-size: 0.85rem; line-height: 1.4;">${plant.uses.substring(0, 80)}...</p>
            </div>
            ${actionsHtml}
        </div>
    `;
    return card;
}

function copyText(text, event) {
    event.stopPropagation();
    navigator.clipboard.writeText(text).then(() => {
        showTooltip(event.pageX, event.pageY, "Copied!");
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

function showTooltip(x, y, message) {
    const tooltip = document.createElement('div');
    tooltip.className = 'copied-tooltip';
    tooltip.textContent = message;
    tooltip.style.left = `${x}px`;
    tooltip.style.top = `${y}px`;
    document.body.appendChild(tooltip);
    
    setTimeout(() => {
        tooltip.remove();
    }, 1000);
}

function renderRecentlyViewed() {
    // Only show in user view and when not searching/viewing all
    const searchTerm = searchInput.value.toLowerCase();
    if (currentRole === 'user' && searchTerm.length === 0 && !isViewingAll && recentlyViewed.length > 0) {
        recentSection.classList.remove('hidden');
        recentGrid.innerHTML = '';
        
        recentlyViewed.slice(0, 8).forEach(id => {
            const plant = plants.find(p => p.id == id);
            if (plant) {
                const card = createPlantCard(plant, true);
                recentGrid.appendChild(card);
            }
        });
    } else {
        recentSection.classList.add('hidden');
    }
}

function showDetailView(id) {
    const plant = plants.find(p => p.id == id);
    if (!plant) return;

    // Add to recently viewed
    recentlyViewed = [id, ...recentlyViewed.filter(recentId => recentId !== id)].slice(0, 8);
    localStorage.setItem('herbarium_recent', JSON.stringify(recentlyViewed));

    // Populate details
    detailName.textContent = plant.name;
    detailScientific.textContent = plant.scientificName;
    detailCategory.textContent = plant.category;
    detailUses.textContent = plant.uses;
    
    // Set image with fallback
    const fallbackImage = `https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=800`;
    
    if (plant.imageUrl && plant.imageUrl.trim() !== "") {
        detailImg.src = plant.imageUrl;
    } else {
        const query = plant.name.split(' ')[0];
        detailImg.src = `https://source.unsplash.com/800x600/?plant,${query}`;
    }

    detailImg.onerror = function() {
        this.src = fallbackImage;
        this.onerror = null;
    };

    // Show Overlay and Lock Scroll
    detailView.classList.remove('hidden');
    document.body.classList.add('modal-open');
}

function hideDetailView() {
    detailView.classList.add('hidden');
    document.body.classList.remove('modal-open');
    renderRecentlyViewed();
    renderPlants();
}

function setupEventListeners() {
    searchInput.addEventListener('input', () => {
        isViewingAll = false; // Reset view all on typing
        renderPlants();
        renderRecentlyViewed();
    });

    viewAllBtn.addEventListener('click', () => {
        isViewingAll = true;
        searchInput.value = ''; // Clear search when viewing all
        renderPlants();
        renderRecentlyViewed();
    });

    clearRecentBtn.addEventListener('click', () => {
        if (confirm('Clear your recently viewed history?')) {
            recentlyViewed = [];
            localStorage.setItem('herbarium_recent', JSON.stringify(recentlyViewed));
            renderRecentlyViewed();
        }
    });

    backBtn.addEventListener('click', hideDetailView);

    // Close overlay when clicking outside the tab container
    detailView.addEventListener('click', (e) => {
        if (e.target === detailView) {
            hideDetailView();
        }
    });

    switchRoleBtn.addEventListener('click', () => {
        if (currentRole === 'user') {
            currentRole = 'admin';
            switchRoleBtn.textContent = 'Switch to User';
            roleLabel.textContent = 'Admin View';
            adminControls.classList.remove('hidden');
        } else {
            currentRole = 'user';
            switchRoleBtn.textContent = 'Switch to Admin';
            roleLabel.textContent = 'User View';
            adminControls.classList.add('hidden');
            isViewingAll = false; // Reset library view when switching back to user
        }
        renderPlants();
        renderRecentlyViewed();
    });

    addPlantBtn.addEventListener('click', () => {
        modalTitle.textContent = 'Add New Plant';
        plantForm.reset();
        document.getElementById('plantId').value = '';
        plantModal.style.display = 'block';
    });

    closeModalBtn.addEventListener('click', () => {
        plantModal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === plantModal) {
            plantModal.style.display = 'none';
        }
    });

    plantForm.addEventListener('submit', (e) => {
        e.preventDefault();
        savePlant();
    });
}

function savePlant() {
    const id = document.getElementById('plantId').value;
    const name = document.getElementById('plantName').value;
    const scientificName = document.getElementById('scientificName').value;
    const imageUrl = document.getElementById('plantImage').value;
    const uses = document.getElementById('plantUses').value;
    const category = document.getElementById('plantCategory').value;

    if (id) {
        const index = plants.findIndex(p => p.id == id);
        if (index !== -1) {
            plants[index] = { ...plants[index], name, scientificName, imageUrl, uses, category };
        }
    } else {
        const newPlant = { id: Date.now(), name, scientificName, imageUrl, uses, category };
        plants.push(newPlant);
    }

    localStorage.setItem('herbarium_plants', JSON.stringify(plants));
    plantModal.style.display = 'none';
    renderPlants();
}

function openEditModal(id) {
    const plant = plants.find(p => p.id == id);
    if (plant) {
        modalTitle.textContent = 'Edit Plant';
        document.getElementById('plantId').value = plant.id;
        document.getElementById('plantName').value = plant.name;
        document.getElementById('scientificName').value = plant.scientificName;
        document.getElementById('plantImage').value = plant.imageUrl || '';
        document.getElementById('plantUses').value = plant.uses;
        document.getElementById('plantCategory').value = plant.category;
        plantModal.style.display = 'block';
    }
}

function deletePlant(id) {
    if (confirm('Are you sure you want to delete this plant record?')) {
        plants = plants.filter(p => p.id != id);
        localStorage.setItem('herbarium_plants', JSON.stringify(plants));
        renderPlants();
    }
}

init();

window.openEditModal = openEditModal;
window.deletePlant = deletePlant;
window.savePlant = savePlant;
