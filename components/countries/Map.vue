<template>
  <div>
    <img
      src="~/assets/images/map-pays.png"
      alt="countries map"
      usemap="#countries-map"
      @click="$emit('select-country', null)"
    />
    <map name="countries-map">
      <area
        alt="aland"
        title="aland"
        coords="991,627,1014,637,1057,640,1055,677,984,671,983,638"
        shape="poly"
        style="cursor: pointer;"
        @click="$emit('select-country', 'aland')"
      />
      <area
        alt="danemark"
        title="danemark"
        coords="653,757,653,799,827,811,866,817,877,795,878,777,850,765,843,730,811,745,808,751,802,755"
        shape="poly"
        style="cursor: pointer;"
        @click="$emit('select-country', 'danemark')"
      />
      <area
        alt="feroe"
        title="feroe"
        coords="592,548,540,548,539,599,660,598,659,552"
        shape="poly"
        style="cursor: pointer;"
        @click="$emit('select-country', 'feroe')"
      />
      <area
        alt="finland"
        title="finland"
        coords="965,356,984,366,994,365,1008,367,1017,355,1012,328,1024,317,1039,327,1045,349,1048,367,1070,381,1162,383,1161,431,1090,436,1092,458,1098,472,1110,480,1108,497,1134,514,1125,563,1105,600,1079,611,1049,631,1037,626,1013,617,1010,602,1009,584,1003,571,996,555,1011,536,1022,514,1031,480,1034,455,1023,451,1011,433,1007,414,1002,396,994,381,981,373,968,364"
        shape="poly"
        style="cursor: pointer;"
        @click="$emit('select-country', 'finland')"
      />
      <area
        alt="groenland"
        title="groenland"
        coords="284,1,293,31,286,49,268,21,236,33,235,48,253,73,218,73,180,84,157,103,119,153,78,231,73,263,95,281,81,312,104,321,153,303,208,274,252,245,301,264,374,247,452,263,500,250,525,217,536,187,570,158,605,126,630,66,625,40,649,2"
        shape="poly"
        style="cursor: pointer;"
        @click="$emit('select-country', 'groenland')"
      />
      <area
        alt="iceland"
        title="iceland"
        coords="430,361,412,367,407,425,453,462,509,461,584,432,553,406,516,387,467,379,446,356"
        shape="poly"
        style="cursor: pointer;"
        @click="$emit('select-country', 'iceland')"
      />
      <area
        alt="norway"
        title="norway"
        coords="677,621,681,665,764,668,766,694,786,710,808,706,826,687,845,675,859,677,864,654,872,639,868,618,873,606,867,595,864,573,861,551,870,531,887,520,884,506,895,474,892,456,900,450,913,424,910,405,925,390,929,373,946,379,949,360,961,345,982,361,991,355,1004,357,1008,320,1022,312,1043,320,1057,315,1053,295,1029,287,1017,286,991,296,972,308,959,321,937,336,923,351,898,374,897,402,892,423,878,444,873,467,861,493,850,508,831,529,820,542,793,556,773,588,766,600,763,611,762,618"
        shape="poly"
        style="cursor: pointer;"
        @click="$emit('select-country', 'norway')"
      />
      <area
        alt="sweden"
        title="sweden"
        coords="892,794,913,791,916,770,940,766,951,748,985,724,987,710,946,707,943,687,966,672,975,650,956,629,949,627,943,585,982,581,980,540,967,538,984,517,989,501,984,485,992,457,1012,452,1001,431,998,413,990,389,955,367,951,384,934,385,933,399,922,402,917,421,914,439,910,451,901,461,897,483,890,503,897,519,890,528,875,533,866,556,871,573,878,585,879,599,881,611,876,623,878,642,875,652,866,668,866,684,860,688,859,702,870,707,865,719,873,741,890,754,882,769"
        shape="poly"
        style="cursor: pointer;"
        @click="$emit('select-country', 'sweden')"
      />
    </map>
  </div>
</template>
