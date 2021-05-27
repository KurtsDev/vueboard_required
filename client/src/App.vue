<template>
    <CitySelect @currentCity="setCity"/>
    <BoardMessageList />
    <BoardMessageForm />

    <div class="pure-g">
        <div class="pure-u-1-3"> ... </div>
        <div class="pure-u-1-3"> ... </div>
        <div class="pure-u-1-3"> ... </div>
    </div>
</template>

<script>

import io from 'socket.io-client';
import CitySelect from './components/CitySelect';
import BoardMessageForm from './components/BoardMessageForm';
import BoardMessageList from './components/BoardMessageList';

const socket = io.io('http://localhost:5000/')


export default {

  name: 'App',
  components: {
      CitySelect,
      BoardMessageForm,
      BoardMessageList
  },

  data() {
    return {
      currentCity: null,
    }
  },

 created() {
    this.getRealtimeData();
 },

  methods: {
    getRealtimeData() {

      socket.emit('chat message', 'lll')

    },

    setCity(id) {
      this.currentCity = id;
    },

  }

}
</script>

<style>

</style>
