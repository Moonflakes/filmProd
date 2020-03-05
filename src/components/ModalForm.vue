<template>
    <section>
    <form action="">
        <div class="modal-card" style="width: auto">
            <header class="modal-card-head">
                <p class="modal-card-title">Film project</p>
            </header>
            <section class="modal-card-body">
                <!-- <b-carousel
                v-model="carousel"
                :arrow="arrow"
                :animated="animated"
                :has-drag="drag"
                :autoplay="autoPlay"
                :pause-hover="pauseHover"
                :pause-info="pauseInfo"
                :pause-info-type="pauseType"
                :interval="interval"
                :repeat="repeat"
                :indicator-style="indicatorStyle"
                :indicator-position="indicatorPosition"
                :indicator-background="indicatorBackground"
                @change="info($event)">
                    <b-carousel-item >
                        <section :class="`hero is-medium is-bold`">
                            <div class="hero-body">
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
                            </div>
                        </section>
                    </b-carousel-item>
                    <b-carousel-item >
                        <section :class="`hero is-medium is-bold`">
                            <div class="hero-body ">
                                <h1 class="title">Casting</h1>
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
                            </div>
                        </section>
                    </b-carousel-item>
                </b-carousel> -->
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
                // carousel: 0,
                // arrow: false,
                // animated: 'fade',
                // drag: false,
                // autoPlay: false,
                // pauseHover: false,
                // pauseInfo: false,
                // repeat: false,
                // pauseType: 'is-warning',
                // indicatorStyle: 'is-lines',
                // indicatorPosition: 'is-top',
                // indicatorBackground: true,
                // interval: 3000,
                // carousels: [
                //     { title: 'Slide 1', color: 'dark' },
                //     { title: 'Slide 2', color: 'primary' },
                //     { title: 'Slide 3', color: 'info' }
                // ]
            }
        },
        props: ['email', 'password'],

    }
</script>
