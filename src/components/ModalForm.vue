<template>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">Film project</p>
            </header>
            <section class="modal-card-body">
                    <h1 class="title">Infos</h1>
                    <b-field label="Title"
                        :label-position='labelPosition'>
                        <b-input
                            :v-model="title"
                            @input="value => title = value"
                            placeholder="Title"
                            ref="titleEmpty"
                            required>
                        </b-input>
                    </b-field>
                    <b-field grouped>
                        <b-field label="Status"
                            :label-position='labelPosition'>
                            <b-select placeholder="Select a status" 
                                :v-model="status"
                                @input="value => status = value"
                                type="is-danger"
                                ref="statusEmpty"
                                required>
                                <!-- <option
                                    v-for="option in status"
                                    :value="option.id"
                                    :key="option.id">
                                    {{ option.user.first_name }}
                                </option> -->
                                <option value="in progress">In progress</option>
                                <option value="finish">Finish</option>
                                <option value="deserted">Deserted</option>
                            </b-select>
                        </b-field>
                        <b-field label="Production date"
                            :label-position='labelPosition'>
                            <b-datepicker
                                :v-model="date"
                                @input="value => date = value"
                                ref="dateEmpty"
                                editable
                                expanded
                                placeholder="Select a date"
                                required>
                            </b-datepicker>
                            <b-button
                                @click="$refs.dateEmpty.toggle()"
                                type="is-primary">
                                <font-awesome-icon icon="calendar-day" />
                            </b-button>
                        </b-field>
                    </b-field>
                    <b-field label="Synopsis"
                        :label-position="labelPosition">
                        <b-input 
                            :v-model="synopsis"
                            @input="value => synopsis = value"
                            maxlength="200" 
                            type="textarea"
                            ref="synopsisEmpty"
                            required>
                        </b-input>
                    </b-field>
                    <b-field label="Budget"
                        :label-position='labelPosition'>
                        <b-input
                            :v-model="budget"
                            @input="value => budget = value"
                            type="number"
                            placeholder="Budget"
                            ref="budgetEmpty"
                            required>
                        </b-input>
                    </b-field>
                <hr>
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
                                        v-model="castName[index]"
                                        ref="autocomplete"
                                        :data="filteredCastsNamesArray"
                                        placeholder="Name"
                                        @select="option => selected = option"
                                        @input="value => castName[index] = value"
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
                                        :v-model="cast.age"
                                        type="number"
                                        :value="ifAgeExist(index)"
                                        placeholder="Age"
                                        required>
                                    </b-input>
                                </b-field>
                                <b-field label="Role"
                                    :label-position='labelPosition'>
                                    <b-input
                                        v-model="cast.role"
                                        :value="cast.role"
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
            <footer class="modal-card-foot">
                <button class="button" type="button" @click="$parent.close()">Close</button>
                <button class="button is-primary" type="submit" @click="bibi()">Add</button>
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
                castName: [],
                title: '',
                budget: null,
                status: '',
                synopsis: '',
                date: ''
            }
        },

        methods: {
            bibi() {
                const titleEmpty = this.$refs.titleEmpty.checkHtml5Validity()
                const statusEmpty = this.$refs.statusEmpty.checkHtml5Validity()
                const synopsisEmpty = this.$refs.synopsisEmpty.checkHtml5Validity()
                const budgetEmpty = this.$refs.budgetEmpty.checkHtml5Validity()
                const dateEmpty = this.$refs.dateEmpty.checkHtml5Validity()
                // console.log(this.date.toLocaleString('fr-FR').split(' ')[0])
                if (titleEmpty && statusEmpty && synopsisEmpty && budgetEmpty && dateEmpty) {
                    this.$emit('success-response', {
                        title: this.title,
                        status: this.status,
                        synopsis: this.synopsis,
                        budget: this.budget,
                        date: this.date.toLocaleString('fr-FR').split(' ')[0]
                    })
                }
            },
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
            },
            ifAgeExist(index) {
                const value = this.actors.filter(actor => actor.name == this.castName[index])[0]
                let age = null
                if (value)
                    age = value.age
                return age
            }
        },

        computed: {
            ...mapGetters({
                actors: 'actorsNamesAge'
            }),

            filteredCastsNamesArray() {
                return this.actors.map(actor => actor.name)
            },

            
        }

    }
</script>
