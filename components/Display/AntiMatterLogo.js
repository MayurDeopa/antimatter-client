import styles from '../../styles/misc.module.css'

const AntiMatterLogo =({size,animated})=>{

	let dimension = size || 35

    return(
        <div className={animated?styles.logo_animation:'logo'}>
           <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
 viewBox="0 0 180 180" enableBackground="new 0 0 180 180" xmlSpace="preserve" height={dimension} width={dimension} >
<path fill="none" opacity="1.000000" stroke="none" 
	d="
M95.000000,181.000000 
	C63.333336,181.000000 32.166672,181.000000 1.000004,181.000000 
	C1.000003,121.000008 1.000003,61.000011 1.000001,1.000012 
	C60.999989,1.000008 120.999977,1.000008 180.999969,1.000004 
	C180.999985,60.999989 180.999985,120.999977 181.000000,180.999985 
	C152.500000,181.000000 124.000000,181.000000 95.000000,181.000000 
M121.001923,103.621338 
	C121.001923,101.364990 121.001923,99.108643 121.001923,96.251808 
	C123.569992,97.799324 125.640106,98.775414 127.394455,100.153481 
	C133.275879,104.773430 139.187210,108.492157 146.574402,103.032982 
	C147.110077,102.637108 148.006180,102.728973 148.724289,102.596001 
	C152.570145,124.460152 156.382248,146.132355 160.304611,168.431488 
	C163.029343,166.361908 165.485748,164.976456 167.252686,162.980606 
	C168.379257,161.708099 169.265244,159.363449 168.926178,157.786011 
	C165.666489,142.620819 162.076172,127.527153 158.673767,112.392044 
	C155.061600,96.323875 151.585907,80.224899 147.922546,64.168594 
	C147.656052,63.000530 146.551407,61.485146 145.493988,61.118279 
	C133.106369,56.820404 120.581665,52.912014 108.233437,48.507496 
	C88.100822,41.326351 68.007668,34.021469 48.058987,26.349842 
	C44.473515,24.970985 38.713749,25.509466 38.300591,19.199095 
	C38.271652,18.757139 36.359638,18.210299 35.287327,18.114456 
	C33.325367,17.939095 31.336521,18.064539 29.922567,18.064539 
	C28.402540,15.028672 27.174507,12.575991 26.322760,10.874845 
	C22.367102,13.870727 18.618361,16.709896 14.152294,20.092344 
	C14.019464,20.624292 13.546226,22.519493 13.253670,23.691101 
	C15.037333,27.508726 16.726543,31.124195 18.704823,35.358364 
	C19.634623,33.651211 19.997726,32.984535 20.360830,32.317860 
	C23.277081,44.796429 25.195681,57.315853 26.979637,69.854439 
	C28.274193,78.953262 29.354748,88.082314 30.597057,97.188843 
	C31.682777,105.147545 32.849010,113.095360 34.001350,121.044846 
	C35.668892,132.548477 37.005169,144.120316 39.308231,155.495926 
	C39.815140,157.999710 43.578857,160.179001 46.303600,161.659927 
	C46.972359,162.023392 49.495434,159.096237 51.082539,157.593765 
	C51.793301,156.920914 52.538231,156.116776 52.858395,155.225250 
	C55.347019,148.295380 59.488369,142.678650 65.314392,138.117844 
	C74.094185,131.244751 82.669724,124.110710 91.436768,117.002724 
	C93.121071,120.608253 94.740753,123.632217 95.980156,126.804749 
	C101.569664,141.112396 107.014549,155.476593 112.621460,169.777328 
	C113.279388,171.455414 114.615562,172.867584 116.343208,175.463791 
	C117.311516,164.170456 118.300835,154.677429 118.899498,145.159821 
	C119.750603,131.628937 120.314514,118.079994 121.001923,103.621338 
z"/>
<path fill="#808080" opacity="1.000000" stroke="none" 
	d="
M121.001526,104.080055 
	C120.314514,118.079994 119.750603,131.628937 118.899498,145.159821 
	C118.300835,154.677429 117.311516,164.170456 116.343208,175.463791 
	C114.615562,172.867584 113.279388,171.455414 112.621460,169.777328 
	C107.014549,155.476593 101.569664,141.112396 95.980156,126.804749 
	C94.740753,123.632217 93.121071,120.608253 91.436768,117.002724 
	C82.669724,124.110710 74.094185,131.244751 65.314392,138.117844 
	C59.488369,142.678650 55.347019,148.295380 52.858395,155.225250 
	C52.538231,156.116776 51.793301,156.920914 51.082539,157.593765 
	C49.495434,159.096237 46.972359,162.023392 46.303600,161.659927 
	C43.578857,160.179001 39.815140,157.999710 39.308231,155.495926 
	C37.005169,144.120316 35.668892,132.548477 34.001350,121.044846 
	C32.849010,113.095360 31.682777,105.147545 30.597057,97.188843 
	C29.354748,88.082314 28.274193,78.953262 26.979637,69.854439 
	C25.195681,57.315853 23.277081,44.796429 20.360830,32.317860 
	C19.997726,32.984535 19.634623,33.651211 18.704823,35.358364 
	C16.726543,31.124195 15.037333,27.508726 13.253670,23.691101 
	C13.546226,22.519493 14.019464,20.624292 14.152294,20.092344 
	C18.618361,16.709896 22.367102,13.870727 26.322760,10.874845 
	C27.174507,12.575991 28.402540,15.028672 29.922567,18.064539 
	C31.336521,18.064539 33.325367,17.939095 35.287327,18.114456 
	C36.359638,18.210299 38.271652,18.757139 38.300591,19.199095 
	C38.713749,25.509466 44.473515,24.970985 48.058987,26.349842 
	C68.007668,34.021469 88.100822,41.326351 108.233437,48.507496 
	C120.581665,52.912014 133.106369,56.820404 145.493988,61.118279 
	C146.551407,61.485146 147.656052,63.000530 147.922546,64.168594 
	C151.585907,80.224899 155.061600,96.323875 158.673767,112.392044 
	C162.076172,127.527153 165.666489,142.620819 168.926178,157.786011 
	C169.265244,159.363449 168.379257,161.708099 167.252686,162.980606 
	C165.485748,164.976456 163.029343,166.361908 160.304611,168.431488 
	C156.382248,146.132355 152.570145,124.460152 148.724289,102.596001 
	C148.006180,102.728973 147.110077,102.637108 146.574402,103.032982 
	C139.187210,108.492157 133.275879,104.773430 127.394455,100.153481 
	C125.640106,98.775414 123.569992,97.799324 121.001923,96.251808 
	C121.001923,99.108643 121.001923,101.364990 121.001526,104.080055 
M78.229202,112.272423 
	C81.479195,110.509583 84.729187,108.746750 88.121399,106.906769 
	C86.512383,103.848396 85.148834,101.256615 83.167564,97.490692 
	C80.802849,102.892281 78.834465,107.388565 76.368431,112.149620 
	C76.331543,112.588799 76.294655,113.027977 76.257774,113.467163 
	C76.727676,113.210381 77.197578,112.953606 78.229202,112.272423 
M32.357983,32.108566 
	C30.836395,32.470451 28.219780,32.494564 27.985659,33.253578 
	C27.048027,36.293327 26.269800,39.603664 26.499634,42.735630 
	C26.966185,49.093418 28.136250,55.398933 28.997232,61.728588 
	C30.254511,70.971664 31.507629,80.215340 32.738842,89.461914 
	C33.842773,97.752632 34.859516,106.055305 36.013893,114.338882 
	C37.688515,126.355614 39.452354,138.359909 41.214817,150.624710 
	C42.071751,150.117111 42.460083,150.022156 42.608089,149.780167 
	C53.701202,131.644470 64.848076,113.540733 75.771187,95.303001 
	C77.378029,92.620140 79.508095,88.700317 78.640450,86.385826 
	C76.334877,80.235573 73.486008,73.766533 69.123589,69.010933 
	C57.550816,56.395145 45.065468,44.616486 32.357983,32.108566 
M113.882149,54.917862 
	C108.482803,52.628849 103.150734,50.162140 97.670242,48.087482 
	C85.927765,43.642323 74.119415,39.369949 62.316601,35.085854 
	C55.794498,32.718510 49.229069,30.470528 42.683170,28.168736 
	C62.795971,42.029312 83.311844,54.964870 103.726395,68.058403 
	C113.567284,74.370171 124.523857,79.295143 130.926529,89.994637 
	C133.021988,93.496376 135.901398,96.528992 138.467346,99.834160 
	C146.004684,91.745369 146.112549,91.743576 145.953079,82.165535 
	C145.870880,77.228027 145.399139,72.291130 144.924164,67.371262 
	C144.835114,66.448875 144.083694,65.080582 143.321625,64.810455 
	C133.811340,61.439396 124.242630,58.233120 113.882149,54.917862 
M69.369545,50.082264 
	C59.346424,43.841290 49.323303,37.600315 39.300182,31.359343 
	C39.017200,31.760656 38.734215,32.161972 38.451233,32.563286 
	C52.441879,49.922073 72.194435,61.996506 83.353081,82.377220 
	C87.622345,76.611351 91.291542,71.655914 94.898521,66.784492 
	C92.187599,64.970589 89.904015,63.405243 87.583244,61.897118 
	C81.722115,58.088318 75.844246,54.305264 69.369545,50.082264 
M115.005455,83.144890 
	C114.821777,81.821999 115.122414,79.814087 114.376373,79.286636 
	C109.272095,75.677956 103.948189,72.379936 98.842255,69.077003 
	C97.305321,71.988411 95.744797,74.191048 94.923470,76.641434 
	C92.446510,84.031387 84.601265,90.551262 90.989586,99.492157 
	C91.920883,100.795563 92.637466,102.252396 93.558716,103.817131 
	C98.937653,100.517860 104.187836,96.995361 109.723442,94.000420 
	C113.945213,91.716309 115.738762,88.613579 115.005455,83.144890 
M104.877411,132.527405 
	C105.220978,133.536270 105.564545,134.545151 105.908104,135.554016 
	C106.330276,135.548309 106.752441,135.542587 107.174606,135.536880 
	C108.904442,123.993126 110.634277,112.449387 112.547729,99.680336 
	C107.109291,104.052910 103.078133,107.388672 98.938095,110.583321 
	C96.820480,112.217361 96.882294,113.781464 97.948189,116.109558 
	C100.315254,121.279579 102.289528,126.629440 104.877411,132.527405 
M37.882805,31.998917 
	C37.419613,30.984394 36.956421,29.969870 36.493229,28.955347 
	C36.114857,29.172325 35.736485,29.389305 35.358112,29.606285 
	C35.935055,30.378784 36.512001,31.151285 37.882805,31.998917 
z"/>
<path fill="none" opacity="1.000000" stroke="none" 
	d="
M32.650574,32.306686 
	C45.065468,44.616486 57.550816,56.395145 69.123589,69.010933 
	C73.486008,73.766533 76.334877,80.235573 78.640450,86.385826 
	C79.508095,88.700317 77.378029,92.620140 75.771187,95.303001 
	C64.848076,113.540733 53.701202,131.644470 42.608089,149.780167 
	C42.460083,150.022156 42.071751,150.117111 41.214817,150.624710 
	C39.452354,138.359909 37.688515,126.355614 36.013893,114.338882 
	C34.859516,106.055305 33.842773,97.752632 32.738842,89.461914 
	C31.507629,80.215340 30.254511,70.971664 28.997232,61.728588 
	C28.136250,55.398933 26.966185,49.093418 26.499634,42.735630 
	C26.269800,39.603664 27.048027,36.293327 27.985659,33.253578 
	C28.219780,32.494564 30.836395,32.470451 32.650574,32.306686 
z"/>
<path fill="none" opacity="1.000000" stroke="none" 
	d="
M114.285538,54.951202 
	C124.242630,58.233120 133.811340,61.439396 143.321625,64.810455 
	C144.083694,65.080582 144.835114,66.448875 144.924164,67.371262 
	C145.399139,72.291130 145.870880,77.228027 145.953079,82.165535 
	C146.112549,91.743576 146.004684,91.745369 138.467346,99.834160 
	C135.901398,96.528992 133.021988,93.496376 130.926529,89.994637 
	C124.523857,79.295143 113.567284,74.370171 103.726395,68.058403 
	C83.311844,54.964870 62.795971,42.029312 42.683170,28.168736 
	C49.229069,30.470528 55.794498,32.718510 62.316601,35.085854 
	C74.119415,39.369949 85.927765,43.642323 97.670242,48.087482 
	C103.150734,50.162140 108.482803,52.628849 114.285538,54.951202 
z"/>
<path fill="none" opacity="1.000000" stroke="none" 
	d="
M69.671310,50.297081 
	C75.844246,54.305264 81.722115,58.088318 87.583244,61.897118 
	C89.904015,63.405243 92.187599,64.970589 94.898521,66.784492 
	C91.291542,71.655914 87.622345,76.611351 83.353081,82.377220 
	C72.194435,61.996506 52.441879,49.922073 38.451233,32.563286 
	C38.734215,32.161972 39.017200,31.760656 39.300182,31.359343 
	C49.323303,37.600315 59.346424,43.841290 69.671310,50.297081 
z"/>
<path fill="none" opacity="1.000000" stroke="none" 
	d="
M115.003769,83.547569 
	C115.738762,88.613579 113.945213,91.716309 109.723442,94.000420 
	C104.187836,96.995361 98.937653,100.517860 93.558716,103.817131 
	C92.637466,102.252396 91.920883,100.795563 90.989586,99.492157 
	C84.601265,90.551262 92.446510,84.031387 94.923470,76.641434 
	C95.744797,74.191048 97.305321,71.988411 98.842255,69.077003 
	C103.948189,72.379936 109.272095,75.677956 114.376373,79.286636 
	C115.122414,79.814087 114.821777,81.821999 115.003769,83.547569 
z"/>
<path fill="none" opacity="1.000000" stroke="none" 
	d="
M104.650665,132.216690 
	C102.289528,126.629440 100.315254,121.279579 97.948189,116.109558 
	C96.882294,113.781464 96.820480,112.217361 98.938095,110.583321 
	C103.078133,107.388672 107.109291,104.052910 112.547729,99.680336 
	C110.634277,112.449387 108.904442,123.993126 107.174606,135.536880 
	C106.752441,135.542587 106.330276,135.548309 105.908104,135.554016 
	C105.564545,134.545151 105.220978,133.536270 104.650665,132.216690 
z"/>
<path fill="none" opacity="1.000000" stroke="none" 
	d="
M76.866074,111.884842 
	C78.834465,107.388565 80.802849,102.892281 83.167564,97.490692 
	C85.148834,101.256615 86.512383,103.848396 88.121399,106.906769 
	C84.729187,108.746750 81.479195,110.509583 77.748276,112.281342 
	C77.133591,112.155113 76.999832,112.019981 76.866074,111.884842 
z"/>
<path fill="#000000" opacity="1.000000" stroke="none" 
	d="
M37.485874,31.961351 
	C36.512001,31.151285 35.935055,30.378784 35.358112,29.606285 
	C35.736485,29.389305 36.114857,29.172325 36.493229,28.955347 
	C36.956421,29.969870 37.419613,30.984394 37.485874,31.961351 
z"/>
<path fill="#000000" opacity="1.000000" stroke="none" 
	d="
M77.467415,112.493546 
	C77.197578,112.953606 76.727676,113.210381 76.257767,113.467163 
	C76.294655,113.027977 76.331543,112.588799 76.617249,112.017227 
	C76.999832,112.019981 77.133591,112.155113 77.467415,112.493546 
z"/>
</svg>
        </div>
    )
}

export default AntiMatterLogo;