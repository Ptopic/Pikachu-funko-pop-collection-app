CREATE TABLE `figures` 
( `id` INT NOT NULL AUTO_INCREMENT , 
`name` TEXT NOT NULL , 
`image` TEXT NOT NULL ,
`price` INT NOT NULL , 
`ebayLink` TEXT NOT NULL , 
`isCollected` BOOLEAN NOT NULL DEFAULT 0 , 
PRIMARY KEY (`id`));

INSERT INTO `figures` (`id`, `name`, `image`, `price`, `ebayLink`, `isCollected`) VALUES (NULL, 'test', 'img', '666', 'dwadw', '1');
