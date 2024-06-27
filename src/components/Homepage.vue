<template>
    <h1>THE USOMI STEM LIBRARY</h1>
<v-card
    class="mx-auto"
    width="700"
  >
  <v-carousel>
  <v-carousel-item
    src="../Images/ej-yao-D46mXLsQRJw-unsplash.jpg"
  ></v-carousel-item>

  <v-carousel-item
    src="../Images/jeswin-thomas-q2BpMaqzDNQ-unsplash.jpg"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="../Images/thisisengineering-hoivM01c-vg-unsplash.jpg"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="../Images/thomas-t-OPpCbAAKWv8-unsplash.jpg"
    cover
  ></v-carousel-item>
  

  <v-carousel-item
    src="../Images/national-cancer-institute-uVnRa6mOLOM-unsplash.jpg"
    cover
  ></v-carousel-item>


</v-carousel>
</v-card>
<v-card
    class="mx-auto"
    max-width="500"
    hover
  >
    <v-card-item>
      <v-card-title>
        USOMI UNIVERSITY STEM LIBRARY
      </v-card-title>
      SCIENCE, TECHNOLOGY, ENGINEERING AND MATHEMATICS MELTING POINT
      <v-card-subtitle>
        
      </v-card-subtitle>
    </v-card-item>

    <v-card-text>
      <p1>Welcome to Usomi University's Stem Library booking page. Our hope is that all STEM students will get to maximise on the school's wide array of 
      STEM resources such as research papers, books and other necessary materials that will aid in their studies. On top of that, we aim to inculcate a reading
      culture amongst the students.</p1>

      <p2>KARIBUNI SANA.</p2>
    </v-card-text>
  </v-card>


  <v-divider></v-divider>
      <v-divider></v-divider>
      <v-divider></v-divider>
      <h3 class="text-center">What exactly is STEM?</h3>
      <v-divider></v-divider>


  <v-row>
    <v-col cols="12" md="4">
      <v-card
        text=" Science involves the systematic study of the natural world through observation and experimentation, forming the basis for understanding phenomena and developing theories. Technology applies this scientific knowledge to create practical solutions, tools, and processes that improve everyday life and advance industries. Together, they foster critical thinking, problem-solving, and innovation, leading to advancements in healthcare, communication, transportation, and numerous other sectors, significantly enhancing our quality of life and economic growth."
        title="SCIENCE AND TECH"
      ></v-card>

      <div class="text-center text-caption">Using Props Only</div>
    </v-col>

    <v-col cols="12" md="4">
      <v-card>
        <template v-slot:title>
          "ENGINEERING
        </template>

        <template v-slot:subtitle>
          Mechanical, Civil, Electrical, Biosystems, Geospatial
        </template>

        <template v-slot:text>
            focuses on applying scientific and mathematical principles to design, build, and maintain structures, machines, systems, and processes. It encompasses various disciplines, such as civil, mechanical, electrical, and computer engineering, each contributing to different aspects of infrastructure and technology. Engineers solve real-world problems by creating innovative solutions, improving efficiency, and ensuring safety and sustainability.
        </template>
      </v-card>

      <div class="text-center text-caption">Using Slots Only</div>
    </v-col>

    <v-col cols="12" md="4">
      <v-card>
        <v-card-item>
          <v-card-title>MATHEMATICS</v-card-title>
        </v-card-item>

        <v-card-text>
            Mathematics, a foundational element of the STEM framework, involves the study of numbers, quantities, shapes, and patterns, and the use of abstract reasoning and logical thinking. It provides the language and tools necessary for understanding and describing the natural world and forms the basis for problem-solving and decision-making in science, technology, and engineering. Mathematical principles and techniques are used to model and analyze complex systems, optimize processes, and develop algorithms
        </v-card-text>
      </v-card>

      <div class="text-center text-caption">Using Markup Only</div>
    </v-col>
  </v-row>

  <v-card
    class="mx-auto"
    max-width="344"
    hover
  >
    <v-card-item>
      <v-card-title>
        WHY STEM?
      </v-card-title>

    </v-card-item>

    <v-card-text>
        STEM (Science, Technology, Engineering, and Mathematics) education is vital because it drives innovation, fosters critical problem-solving skills, and offers numerous high-demand career opportunities. It integrates multiple disciplines, enhancing understanding and collaboration, and significantly impacts society by improving healthcare, infrastructure, and environmental sustainability. By engaging students in these fields, STEM prepares them for the challenges and opportunities of the modern world.
    </v-card-text>
  </v-card>

</template>