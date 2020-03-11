<template>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">Film project</p>
            </header>
            <section class="modal-card-body">
                <section >
                    <h1 class="title">Infos</h1>
                    <b-field label="Title"
                        :label-position='labelPosition'>
                        <b-input
                            :value="title"
                            placeholder="Title"
                            required>
                        </b-input>
                    </b-field>
                    <b-field grouped>
                        <b-field label="Status"
                            :label-position='labelPosition'>
                            <b-select placeholder="Select a status">
                                <option value="1">In progress</option>
                                <option value="2">Finish</option>
                                <option value="3">Deserted</option>
                            </b-select>
                        </b-field>
                        <b-field label="Production date"
                            :label-position='labelPosition'>
                            <b-datepicker
                                ref="datepicker"
                                expanded
                                placeholder="Select a date">
                            </b-datepicker>
                            <b-button
                                @click="$refs.datepicker.toggle()"
                                icon-left="calendar-today"
                                type="is-primary" />
                        </b-field>
                    </b-field>
                    <b-field label="Synopsis"
                        :label-position="labelPosition">
                        <b-input 
                            maxlength="200" 
                            type="textarea"
                            required>
                        </b-input>
                    </b-field>
                    <b-field label="Budget"
                        :label-position='labelPosition'>
                        <b-input
                            :value="budget"
                            placeholder="Budget"
                            required>
                        </b-input>
                    </b-field>
                </section>
                <hr>
                <section >
                    <h1 class="title">Casting</h1>
                    <a aria-label="add film" class="is-primary" @click="addCast">
                        <font-awesome-icon icon="plus-square" /> Add a cast
                    </a>
                    <section v-for="(cast, index) in casts" :key="cast.id">
                        <div class="cast">
                            <h4 class="subtitle">Actor {{index + 1}}</h4>
                            <b-field grouped>
                                <b-field label="Name"
                                    :label-position='labelPosition'>
                                    <b-autocomplete
                                        v-model="castName"
                                        ref="autocomplete"
                                        :data="filteredCastsNamesArray"
                                        placeholder="Name"
                                        @select="option => selected = option"
                                        required>
                                        <template slot="footer">
                                            <a @click="showAddName">
                                                <span> Add new... </span>
                                            </a>
                                        </template>
                                        <template slot="empty">No results for {{castName}}</template>
                                    </b-autocomplete>
                                </b-field>
                                <b-field label="Age"
                                    :label-position='labelPosition'>
                                    <b-input
                                        v-model="cast.age"
                                        :value="age"
                                        placeholder="Age"
                                        required>
                                    </b-input>
                                </b-field>
                                <b-field label="Role"
                                    :label-position='labelPosition'>
                                    <b-input
                                        v-model="cast.role"
                                        :value="role"
                                        placeholder="Role"
                                        required>
                                    </b-input>
                                </b-field>
                                <a aria-label="add film" class="is-primary" @click="deleteCast(index)">
                                    <font-awesome-icon icon="minus-circle" />
                                </a>
                            </b-field>
                        </div>
                    </section>
                </section>
                
            </section>
            <footer class="modal-card-foot">
                <button class="button" type="button" @click="$parent.close()">Close</button>
                <button class="button is-primary">Add</button>
            </footer>
        </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        data() {
            return {
                labelPosition: 'on-border',
                casts: [
                    {
                        name: '',
                        age: '',
                        role: '',
                    }
                ],
                castsNames: [
                    'Philippe Catherine',
                    'Adele Miroux',
                    'Julien Buderon'
                ],
                castName: ''
            }
        },
        props: ['email', 'password'],

        methods: {
            addCast() {
                console.log("actors", this.actors)
                this.casts.push({
                    name: '',
                    age: '',
                    role: ''
                })
            },

            deleteCast(index) {
                this.casts.splice(index, 1)
            },

            showAddName() {
                this.$buefy.dialog.prompt({
                    message: `Fruit`,
                    inputAttrs: {
                        placeholder: 'e.g. Pierre Pierre',
                        maxlength: 20,
                        value: this.castName
                    },
                    confirmText: 'Add',
                    onConfirm: (value) => {
                        this.castsNames.push(value)
                        this.$refs.autocomplete.setSelected(value)
                    }
                })
            }
        },

        computed: {
            ...mapGetters({
                actors: 'actorsNames'
            }),

            filteredCastsNamesArray() {
                return this.castsNames.filter((option) => {
                    return option
                        .toString()
                        .toLowerCase()
                        .indexOf(this.castName.toLowerCase()) >= 0
                })
            }
        }

    }
</script>
