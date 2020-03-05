<template>
    <section>
    <form action="">
        <div class="modal-card" style="width: auto">
            <header class="modal-card-head">
                <p class="modal-card-title">Film project</p>
            </header>
            <section class="modal-card-body">
                <h1 class="title">Infos</h1>
                <b-field label="Title"
                    :label-position='labelPosition'>
                    <b-input
                        :value="title"
                        placeholder="Title"
                        required>
                    </b-input>
                </b-field>
                <b-field label="Status"
                    :label-position='labelPosition'>
                    <b-select placeholder="Select a status">
                        <option value="1">In progress</option>
                        <option value="2">Finish</option>
                        <option value="3">Deserted</option>
                    </b-select>
                </b-field>
                <b-field>
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
                <h1 class="title">Casting</h1>
                <b-button
                        icon-left="plus"
                        type="is-primary"
                        @click="addCast" />
                <section v-for="(cast, index) in casts" :key="cast.id">
                    <div class="cast">
                        <h4 class="subtitle">Actor {{index + 1}}</h4>
                        <b-field grouped>
                            <b-field label="Name"
                                :label-position='labelPosition'>
                                <b-input
                                    v-model="cast.name"
                                    :value="name"
                                    placeholder="Name"
                                    required>
                                </b-input>
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
                            <b-button
                                icon-left="minus"
                                type="is-primary"
                                @click="deleteCast(index)" />
                        </b-field>
                    </div>
                </section>
                
            </section>
            <footer class="modal-card-foot">
                <button class="button" type="button" @click="$parent.close()">Close</button>
                <button class="button is-primary">Add</button>
            </footer>
        </div>
    </form>
    </section>
</template>

<script>
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
                ]
            }
        },
        props: ['email', 'password'],
        methods: {
            addCast() {
                this.casts.push({
                    name: '',
                    age: '',
                    role: ''
                })
            },

            deleteCast(index) {
                this.casts.splice(index, 1)
            }
        }

    }
</script>
