function hasCollided(Lbullet,Lwall){

    bulletRightEdge=lbullet.x+lbullet.width;
    wallLeftEdge=lwall.x
  
    if (bulletRightEdge>=wallLeftEdge) {
      return true
    }
     return false
  }