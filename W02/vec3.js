Vec3 = function(x,y,z)
{
    this.x = x;
    this.y = y;
    this.z = z;

}

Vec3.prototype.add= function(v)
{this.x+=v.x;
 this.y+=v.y;
 this.z+=v.z;

 return this;
 
}

Vec3.prototype.sum= function(v)
{

 return this.x + this.y + this.z;
 
}


Vec3.prototype.min= function(){
    var min
    if(this.x < this.y){
	min = this.x;
	if(min>this.z){
	    return this.z;
	}else{
	    return this.x;
	}
    }else{
	min = this.y;
if(min>this.z){
	    return this.z;
	}else{
	    return this.y;
	}
    }
}

Vec3.prototype.mid= function(){
    var mid
    if(this.x < this.y){
	mid = this.y;
	if(mid>this.z){
	    return this.z;
	}else{
	    return this.y;
	}
    }else{
	mid = this.x;
if(mid>this.z){
	    return this.z;
	}else{
	    return this.x;
	}
    }
}

Vec3.prototype.max= function(){
    var max
    if(this.x < this.y){
	max = this.y;
	if(max>this.z){
	    return this.y;
	}else{
	    return this.z;
	}
    }else{
	max = this.x;
if(max>this.z){
	    return this.x;
	}else{
	    return this.z;
	}
    }
}
