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
                                <b-field grouped v-if="!cast.addCastModal">
                                    <b-field label="Fullname" 
                                        :label-position='labelPosition'>
                                        <b-autocomplete
                                            ref="autocomplete"
                                            v-model="cast.fullName"
                                            :data="filteredCastsArray"
                                            placeholder="Fullname"
                                            @input="onFaitqqchla(index)"
                                            @select="option => splitFullname(option, index)"
                                            required>
                                            <template slot="empty">No results for {{cast.fullName}}</template>
                                        </b-autocomplete>
                                        
                                    </b-field>
                                    <a aria-label="add film" class="is-primary" @click="IDontWantAnExistingCast(index)">
                                        <font-awesome-icon icon="times" />
                                    </a>
                                </b-field>

                                <b-field grouped v-if="cast.addCastModal">
                                    <b-field :label-position='labelPosition' label="Firstname">
                                        <b-input
                                            ref="firstName"
                                            v-model="cast.firstName"
                                            placeholder="Firstname"
                                            required>
                                        </b-input>
                                    </b-field>

                                    <b-field :label-position='labelPosition' label="Lastname">
                                        <b-input
                                            ref="lastName"
                                            v-model="cast.lastName"
                                            placeholder="Lastname"
                                            required>
                                        </b-input>
                                    </b-field>
                                    <a aria-label="add film" class="is-primary" @click="cast.addCastModal = !cast.addCastModal">
                                        <font-awesome-icon icon="search" />
                                    </a>
                                </b-field>

                                <b-field label="Age"
                                    :label-position='labelPosition'>
                                    <b-input
                                        :v-model="cast.age"
                                        type="number"
                                        :value="cast.age"
                                        @input="value => cast.age = value"
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
                        fullName: '',
                        firstName: '',
                        lastName: '',
                        age: '',
                        role: '',
                        addCastModal: true
                    }
                ],
                title: '',
                budget: null,
                status: '',
                synopsis: '',
                date: '',
                indexCast: -1,
                // addCastModal: true
            }
        },

        methods: {
            bibi() {
                const titleEmpty = this.$refs.titleEmpty.checkHtml5Validity()
                const statusEmpty = this.$refs.statusEmpty.checkHtml5Validity()
                const synopsisEmpty = this.$refs.synopsisEmpty.checkHtml5Validity()
                const budgetEmpty = this.$refs.budgetEmpty.checkHtml5Validity()
                const dateEmpty = this.$refs.dateEmpty.checkHtml5Validity()
                console.log(this.$refs.autocomplete)
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
                // console.log("actors",s this.actors)
                this.casts.push({
                    fullName: '',
                    firstName: '',
                    lastName: '',
                    age: '',
                    role: '',
                    addCastModal: true
                })
            },

            deleteCast(index) {
                this.casts.splice(index, 1)
            },

            showAddName(index) {
                this.$buefy.dialog.prompt({
                    inputAttrs: {
                        placeholder: 'e.g. Pierre',
                        maxlength: 20,
                        value: this.casts[index].fullName
                    },
                    confirmText: 'Add',
                    onConfirm: (value) => {
                        // this.castsNames.push(value)
                        this.$refs.autocomplete.setSelected(value)
                    }
                })
            },
            onFaitqqchla(index) {
                this.indexCast = index
            },
            IDontWantAnExistingCast(index) {
                console.log(this.$refs.autocomplete[index])
                this.$refs.autocomplete[index].useHtml5Validation = true

                this.casts[index].addCastModal = !this.casts[index].addCastModal
            },
            splitFullname(option, index) {
                const splitFullname = option.split(' ')
                this.casts[index].firstName = splitFullname[0]
                this.casts[index].lastName = splitFullname[1]

                const value = this.actors.filter(actor => actor.firstName + ' ' + actor.lastName == option)[0]
                console.log(option,value)
                this.casts[index].age = value.age


                this.casts[index].addCastModal = !this.casts[index].addCastModal
            }
        },

        computed: {
            ...mapGetters({
                actors: 'actorsNamesAge'
            }),

            filteredCastsArray() {
                if (this.indexCast > -1){
                    return this.actors.map(actor => actor.firstName + ' ' + actor.lastName)
                    .filter((option) => {
                    return option.toString().toLowerCase().indexOf(this.casts[this.indexCast].fullName.toLowerCase()) >= 0
                })
                }
                return []
            }
        }
    }
</script>
