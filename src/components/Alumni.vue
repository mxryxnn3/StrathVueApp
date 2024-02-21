<template>
    <div id = 'Alumni'>
        <v-container>
                <v-layout column>
                    <v-carousel>
                        <v-carousel-item
                            src="https://www.shutterstock.com/image-photo/students-graduation-group-portrait-college-friends-2304306149"
                            cover
                        ></v-carousel-item>

                        <v-carousel-item
                            src="https://www.shutterstock.com/image-photo/education-graduation-people-concept-silhouettes-many-451321816"
                            cover
                        ></v-carousel-item>

                        <v-carousel-item
                            src="https://www.shutterstock.com/image-photo/group-diverse-international-students-celebrating-graduation-183346463"
                            cover
                        ></v-carousel-item>
                    </v-carousel>
                    </v-layout>
                    <v-layout>
                    <v-container>
                        <v-row align="center" justify="center">
                            <div class="d-flex align-center flex-column">
                                <div class="text-subtitle-2">Strathmore University</div>

                                <v-card
                                width="400"
                                title="WORLD CLASS EDUCATION"
                                subtitle="Welcome to Strathmore Unversity!"
                                text="Strathmore University is a world class unversity that boasts a representation of over 93 nationalities."
                                ></v-card>

                                <div class="mt-4 text-subtitle-2">With slots</div>

                                <v-card width="400">
                                <template v-slot:title>
                                    Alumni
                                </template>

                                <template v-slot:subtitle>
                                    Alumni Network
                                </template>

                                <template v-slot:text>
                                    This is content
                                </template>
                                </v-card>

                                <div class="mt-4 text-subtitle-2">With markup</div>

                                <v-card width="400">
                                <v-card-item>
                                    <v-card-title>This is a title</v-card-title>

                                    <v-card-subtitle>This is a subtitle</v-card-subtitle>
                                </v-card-item>

                                <v-card-text>
                                    This is content
                                </v-card-text>
                                </v-card>
                            </div>
                        </v-row>
                    </v-container>
                </v-layout>
            </v-container>
    </div>
</template>
<script setup>
  const variants = ['elevated', 'flat', 'tonal', 'outlined']
</script>