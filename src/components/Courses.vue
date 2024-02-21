<template>
    <div id = 'Courses'>
        <v-container>
                <v-layout column>
                    <v-carousel>
                        <v-carousel-item
                            src="https://www.niche.com/blog/wp-content/uploads/2019/07/day-in-the-life-ivy-league-1200-1200x794.jpg"
                            cover
                        ></v-carousel-item>

                        <v-carousel-item
                            src="https://www.urban.org/sites/default/files/2022-03/gettyimages-647719628_crop.jpg"
                            cover
                        ></v-carousel-item>

                        <v-carousel-item
                            src="https://www.uopeople.edu/wp-content/uploads/2022/05/sam-balye-w1FwDvIreZU-unsplash-scaled.jpg.webp"
                            cover
                        ></v-carousel-item>
                    </v-carousel>
                    </v-layout>
                    <v-layout>
                    <v-container>
                        <v-row align="center" justify="center">
                            <div class="d-flex align-center flex-column">
                                <div class="text-subtitle-2">Strathmore University</div>

                                
                                <div class="mt-4 text-subtitle-2"></div>

                                <v-card width="700">
                                <v-card-title>{{ componentTitle }}</v-card-title>

                                <v-card-text>
                                    <v-list
                                    :items="courses"
                                    item-title="coursename"
                                    item-value="id"
                                    ></v-list>
                                </v-card-text>
                                </v-card>

                                <div class="mt-4 text-subtitle-2">With markup</div>


                              
                            </div>
                        </v-row>
                    </v-container>
                </v-layout>
            </v-container>
    </div>
</template>
<script>
export default {
  // Properties returned from data() become reactive state
  // and will be exposed on `this`.
  data() {
    return {
    courses: [
        {
            id: 1,
            coursename: 'Financial Economics'
        },
        {
            id: 2,
            coursename: 'Psychology'
        },
        {
            id: 3,
            coursename: 'Computer Science'
        },
        {
            id: 4,
            coursename: 'Fnnacial Engneering'
        },
        {
            id: 5,
            coursename: 'Medicine'
        },
        {
            id: 6, 
            coursename: 'Education'
        },
        {
            id: 7,
            coursename: 'Architecture'
        },
        {
            id: 8,
            coursename: 'Forestry'
        },
        {
            id: 9,
            coursename: 'Law'
        },
        {
            id: 10,
            coursename: 'Hospiitality and Tourism'
        },
    ],
    componentTitle: 'Courses offered at Strathmore University '
    }
  },

  // Methods are functions that mutate state and trigger updates.
  // They can be bound as event handlers in templates.
  methods: {
    increment() {
      this.count++
    }
  },

  // Lifecycle hooks are called at different stages
  // of a component's lifecycle.
  // This function will be called when the component is mounted.
  mounted() {
    console.log(`The initial count is ${this.count}.`)
  }
}
</script>