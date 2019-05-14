export class Statics {
  static onInit() {
    const soon = document.getElementById('soon');
    const today = document.getElementById('today');
    const index = document.getElementById('index');
    const schedule = document.getElementById('schedule');
    soon.classList.remove('active');
    today.classList.remove('active');
    index.classList.remove('active');
    schedule.classList.remove('active');
  }
}
