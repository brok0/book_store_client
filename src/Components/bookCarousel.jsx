import React from "react";
import Carousel from "react-bootstrap/Carousel";

export default function BookCarousel() {
	return (
		<Carousel>
			<Carousel.Item interval={1000}>
				<img className="d-block w-20" src="logo192.png" alt="First slide" />
				<Carousel.Caption bsPrefix=" carousel-caption text-secondary">
					<h3>First slide label</h3>
					<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item interval={1000}>
				<img className="d-block w-20 " src="logo192.png" alt="Second slide" />
				<Carousel.Caption bsPrefix=" carousel-caption text-secondary">
					<h3>Second slide label</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item interval={1000}>
				<img className="d-block w-20" src="logo192.png" alt="Third slide" />
				<Carousel.Caption bsPrefix="carousel-caption text-secondary">
					<h3>Third slide label</h3>
					<p>
						Praesent commodo cursus magna, vel scelerisque nisl consectetur.
					</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
}
