<section class="We-Are-Popular">
			<div class="container">
				<div class="row">
					<div class="col-md-12 text-center">
						<h2><?php if($idiomaatual=='pt'){echo $texto1->getTitulo();}else{echo $texto1->getTituloen();}; ?></h2>
						<h3><?php if($idiomaatual=='pt'){echo strip_tags($texto1->getResumo());}else{echo strip_tags($texto1->getResumoen());}; ?></h3>
						<h6 class="pad-t-50 pad-b-50"><?php if($idiomaatual=='pt'){echo strip_tags($texto1->getConteudo());}else{echo strip_tags($texto1->getConteudoen());}; ?></h6>
					</div>   			   
				</div>
			</div> <!-- /.container-->

			<div class="container">
				<?php

				$c=0;
				$d=1;
				while ($dados = $dbserv->Fetch()) {
					$servicos = new Conteudo();
					$servicos->Carrega($dados->idconteudo);

					if($c==0){
						echo "<div class=\"row\">";
					}

					if($idiomaatual=='pt'){
						echo "<div class=\"col-md-4 col-sm-4 col-xs-12\">
						<div class=\"popular-single-content\">
						<div class=\"icon\"><i class=\"{$servicos->getPublico()}\" aria-hidden=\"true\"></i></div>
						<h3><a href=\"".$cabecalho['menu_link_servicos']."/{$servicos->getUrlamigavel()}\" class=\"\">{$servicos->getTitulo()}</a></h3>
						<span class=\"font_fix\">{$d}</span>
						<h6>".strip_tags($servicos->getConteudo())."</h6>
						</div>
						</div>";
					}else{
						echo "<div class=\"col-md-4 col-sm-4 col-xs-12\">
						<div class=\"popular-single-content\">
						<div class=\"icon\"><i class=\"{$servicos->getPublico()}\" aria-hidden=\"true\"></i></div>
						<h3><a href=\"".$cabecalho['menu_link_servicos']."/{$servicos->getUrlamigavelen()}\" class=\"\">{$servicos->getTituloen()}</a></h3>
						<span class=\"font_fix\">{$d}</span>
						<h6>".strip_tags($servicos->getConteudoen())."</h6>
						</div>
						</div>";
					}

					

					$c++;
					$d++;

					if($c==3){
						echo "</div>";
						$c=0;
					}

				}
				if($c>0){
					echo "</div>";
				}

				?>
			</div><!-- /.container-->   	
		</section> <!-- /.We-Are-Popular-->

			<!-- 
			=============================================
				Get Quote
			============================================== 
		-->
		<div class="Get-Quote-banner wow fadeInUp">
			<div class="container">
				<h4 class="float-left"><?php echo $cabecalho['home_cta_titulo']; ?></h4>
				<a href="<?php echo $cabecalho['home_cta_link']; ?>/outsourcing" class=" float-right hvr-shutter-out-horizontal-two"><?php echo $cabecalho['home_cta_botao']; ?></a>
			</div><!-- /.container -->
		</div> <!-- /.Get-Quote-banner -->

            <!-- 
			=============================================
				Services-section 
			============================================== 
		--> 
		<section class="Services-section Avail-free-offer">
			<div class="container">
				<div class="theme-title">
					<h2 class="txt-white"><?php if($idiomaatual=='pt'){echo $texto2->getTitulo();}else{echo $texto2->getTituloen();}; ?></h2>
					<span class="txt-white"><?php if($idiomaatual=='pt'){echo strip_tags($texto2->getConteudo());}else{echo strip_tags($texto2->getConteudoen());}; ?></span>
				</div><!-- /.theme-title-->

				<?php

				$c=0;
				$d=1;
				while ($dados = $dbdes->Fetch()) {
					$destaque = new Conteudo();
					$destaque->Carrega($dados->idconteudo);

					if($c==0){
						echo "<div class=\"row\">";
					}

					if($idiomaatual=="pt"){
						echo "<div class=\"col-md-4 col-sm-6 col-xs-12\">
						<div class=\"service-single-content\">
						<h3><a href=\"\" class=\"\">{$destaque->getTitulo()}</a></h3>
						<span class=\"font_fix\">{$d}</span>
						<h6>".strip_tags($destaque->getConteudo())."</h6>
						</div><!-- /.popular-single-content--> 	
						</div><!-- /.col- -->";
					}else{
						echo "<div class=\"col-md-4 col-sm-6 col-xs-12\">
						<div class=\"service-single-content\">
						<h3><a href=\"\" class=\"\">{$destaque->getTituloen()}</a></h3>
						<span class=\"font_fix\">{$d}</span>
						<h6>".strip_tags($destaque->getConteudoen())."</h6>
						</div><!-- /.popular-single-content--> 	
						</div><!-- /.col- -->";
					}

					

					$c++;
					$d++;

					if($c==3){
						echo "</div>";
						$c=0;
					}

				}
				if($c>0){
					echo "</div>";
				}

				?>
			</div><!-- /.container-->	
		</section><!-- /.Services-section-->