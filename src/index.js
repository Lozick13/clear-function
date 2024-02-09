export function healthStatus(options) {
  if (options.health > 50) {
    return 'healthy';
  } else if (options.health <= 50 && options.health >= 15) {
    return 'wounded';
  }
  return 'critical';
}
