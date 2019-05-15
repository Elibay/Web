export class Statics {
  static onInit() {
    const soon = document.getElementById('soon');
    const today = document.getElementById('cinema');
    const index = document.getElementById('index');
    const schedule = document.getElementById('schedule');
    soon.classList.remove('active');
    today.classList.remove('active');
    index.classList.remove('active');
    schedule.classList.remove('active');
  }
  // static API_URL = 'http://172.16.95.190:8000/api';
  static API_URL = 'http://127.0.0.1:8000/api';
}
