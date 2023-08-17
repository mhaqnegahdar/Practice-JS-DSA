function towerOfHonoi(n, from, to, using) {
  if (n === 1) {
    console.log(`Move desc 1 from ${from} to ${to}`);
    return;
  }
  towerOfHonoi(n - 1, from, using, to);
  console.log(`Move desc ${n} from ${from} to ${to}`);
  towerOfHonoi(n - 1, using, to, from);
}

towerOfHonoi(5, "A", "B", "C");
