Readium.Models.EPUB=Backbone.Model.extend({defaults:{can_two_up:!0},initialize:function(){this.packageDocument=new Readium.Models.PackageDocument({book:this,file_path:this.get("package_doc_path")})},getPackageDocument:function(){return this.packageDocument},toJSON:function(){return{apple_fixed:this.get("apple_fixed"),author:this.get("author"),cover_href:this.get("cover_href"),created_at:this.get("created_at"),description:this.get("description"),epub_version:this.get("epub_version"),fixed_layout:this.get("fixed_layout"),
id:this.get("id"),key:this.get("key"),language:this.get("language"),layout:this.get("layout"),modified_date:this.get("modified_date"),ncx:this.get("ncx"),open_to_spread:this.get("open_to_spread"),orientation:this.get("orientation"),package_doc_path:this.get("package_doc_path"),page_prog_dir:this.get("page_prog_dir"),paginate_backwards:this.get("paginate_backwards"),pubdate:this.get("pubdate"),publisher:this.get("publisher"),rights:this.get("rights"),spread:this.get("spread"),src_url:this.get("src_url"),
title:this.get("title")}},resolvePath:function(a){return this.packageDocument.resolvePath(a)},isFixedLayout:function(){return this.get("fixed_layout")||this.get("apple_fixed")}});